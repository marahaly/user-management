<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MultiUserController extends Controller
{
    public function admin(): Response
    {
        return Inertia::render('admin/users');
    }

    public function superadmin(): Response
    {
        $users = User::all();
        return Inertia::render('superadmin/system', compact('users'));
    }

    public function edit(User $user){
        return inertia::render('superadmin/edit', compact('user'));
    }

    public function update(Request $request, User $user){
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'role' => 'required|string'
        ]);

        $user->update([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'role' => $request->input('role'),
        ]);

        return redirect()->route('superadmin')->with('message', 'User updated successfully');

    }

}
