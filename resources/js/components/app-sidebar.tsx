import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, Shield, Settings, LayoutGrid } from 'lucide-react';
import { usePage } from '@inertiajs/react'

import AppLogo from './app-logo';

export function AppSidebar() {
    const {auth} = usePage().props;
    const userRole = auth?.user?.role || 'user';

    const mainNavItems: NavItem[] = [
        {
            title: 'Monitoring',
            href: '/dashboard',
            icon: LayoutGrid,
        },
    ];

    const adminNavItems: NavItem[] = [
        {
            title: 'Admin',
            href: '/admin/users',
            icon: Shield,
        },
    ];

    const superAdminNavItems: NavItem[] = [
        {
            title: 'Super Admin',
            href: '/superadmin/system',
            icon: LayoutGrid,
        },
    ];

    let roleBasedNavItems = [...mainNavItems];
    if(userRole === 'admin'){
        roleBasedNavItems = [...roleBasedNavItems, ...adminNavItems];
    }

    if(userRole === 'superadmin'){
        roleBasedNavItems = [...roleBasedNavItems, ...adminNavItems, ...superAdminNavItems];
    }

    const footerNavItems: NavItem[] = [
        {
            title: 'Repository',
            href: 'https://github.com/laravel/react-starter-kit',
            icon: Folder,
        },
        {
            title: 'Documentation',
            href: 'https://laravel.com/docs/starter-kits#react',
            icon: BookOpen,
        },
    ];

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={roleBasedNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
