import Layout from '@/layout';
import Dashboard from '@/pages/dashboard';

export default [
  {
    path: 'dashboard',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Dashboard />,
        meta: {
          title: '工作台',
          icon: 'icon-001'
        },
      },
      {
        path: 'index',
        element: <Dashboard />,
        meta: {
          title: '二级页面',
          icon: 'icon-107',
          authority: '二级页面',
          hidden: true,
        },
      },
    ],
  },
]
