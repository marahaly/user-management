import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { Megaphone } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Laman Super Admin',
        href: '/superadmin/system',
    },
];

interface User {
    id: number,
    name: string,
    email: number,
    role: string,
    updated_at: string
}

interface PageProps {
    flash: {
        message?: string
    },
    users: User[]
}

export default function System() {
    const { users, flash } = usePage().props as PageProps;    
    const {processing, delete: destroy} = useForm();
    const handleDelete = (id: number, name: string) => {
        if(confirm(`Do you want to delete a product - ${id}. ${name}`)){
            destroy(route("products.destroy", id));
        }
    }
    
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Users" />
            <div className='m-4'>
                <div>
                    {flash.message && (
                        <Alert>
                            <Megaphone className="h-4 w-4" />
                            <AlertTitle>Notification!</AlertTitle>
                            <AlertDescription>
                                {flash.message}
                            </AlertDescription>
                        </Alert>
                    )}
                </div>
            </div>
            {users.length > 0 && (
                <div className='m-4'>
                    <Table>
                        <TableCaption>A list of your recent products.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">ID</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Updated At</TableHead>
                                <TableHead className="text-center">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow>
                                    <TableCell className="font-medium">{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.role}</TableCell>
                                    <TableCell>{user.updated_at}</TableCell>
                                    <TableCell className="text-center space-x-2">
                                        <Link href={route('edit',user.id)}><Button className="bg-slate-600 hover:bg-slate-700">Edit</Button></Link>
                                    </TableCell>
                                </TableRow>
                            ))}                            
                        </TableBody>
                    </Table>
                </div>
            )}
        </AppLayout>
    );
}
