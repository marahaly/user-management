import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { Megaphone } from 'lucide-react';

interface User {
    id: number,
    name: string,
    email: string,
    role: string
}

interface Props {
    user: User
}

export default function edit({user} : Props) {
    const {data, setData, put, processing, errors } = useForm({
        name: user.name,
        email: user.email,
        role: user.role
    });

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('update', user.id))
    }
    
    return (
        <AppLayout breadcrumbs={[{title: 'Edit User Role', href: `/superadmin/system/${user.id}/edit`}]}>
            <Head title="Users" />
            <div className='m-4'>
                <div>
                    {Object.keys(errors).length > 0 &&(
                        <Alert>
                            <Megaphone className="h-4 w-4" />
                            <AlertTitle>Notification!</AlertTitle>
                            <AlertDescription>
                                <ul>
                                    {Object.entries(errors).map(([key, message]) => (
                                        <li key={key}>{message as string}</li>
                                    ))}
                                </ul>
                            </AlertDescription>
                        </Alert>
                    )}
                </div>
            </div>
            <div className='m-4'>
                <form onSubmit={handleUpdate} className='space-y-4'>
                    {/* Display error  */}                    

                    <div className='gap-1.5'>
                        <Label htmlFor="name">Name</Label>
                        <Input placeholder="Username" value={data.name} onChange={(e) => setData('name', e.target.value)}></Input>
                    </div>
                    <div className='gap-1.5'>
                        <Label htmlFor="email">Email</Label>
                        <Input placeholder="Email" value={data.email} onChange={(e) => setData('email', e.target.value)}></Input>
                    </div>
                    <div className='gap-1.5'>
                        <Label htmlFor="Role">Role</Label>
                        <Input placeholder="Role" value={data.role} onChange={(e) => setData('role', e.target.value)}></Input>
                    </div>
                    <Button disabled={processing} type="submit">Update</Button>
                </form>
            </div>
        </AppLayout>
    );
}
