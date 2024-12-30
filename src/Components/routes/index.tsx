// import {lazy} from 'react'

// // use lazy for better code splitting, a.k.a. load faster
// const Dashboard = lazy(() => import('../Pages/Dashboard'))
// // const Reports = lazy(() => import('../Pages/reports'))
// const page404 = lazy(() => import('../Pages/404'))


import React, {lazy} from 'react';

const Resume = lazy(() => import('../pages/Resume'))



interface RouteConfig {
    path: string;
    title: string;
    component?: React.ComponentType; // Ensure correct typing for React components
}

const routes:RouteConfig[] = [
    {
        path: '/dashboard',
        title: 'Dashboard',
    },
    {
        path: '/resume',
        title: 'Resume',
        component: Resume
    },
    {
        path: '/project',
        title: 'Projects',
    },
    {
        path: '/experience',
        title: 'Experience',
    },
    {
        path: '/stats',
        title: 'Stats',
    },
    {
        path: '/contact',
        title: 'Contact',
    }
]

export default routes
