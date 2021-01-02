import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Inventario'
  },
  {
    name: 'Proveedores',
    url: '/proveedores',
    icon: 'icon-people',
    children: [
      {
        name: 'Registrar nuevo',
        url: '/provedores/nuevo',
        icon: 'icon-pencil'
      }
    ]
  },
  {
    name: 'Productos',
    url: '/productos',
    icon: 'icon-basket',
    children: [
      {
        name: 'Registrar nuevo',
        url: '/productos/nuevo',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Clientes',
    url: '/clientes',
    icon: 'icon-user',
    children: [
      {
        name: 'Registrar nuevo',
        url: '/clientes/nuevo',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'Facturas',
    url: '/facturas',
    icon: 'icon-doc',
    children: [
      {
        name: 'Consultar',
        url: '/productos/nuevo',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'icon-ban',
    badge: {
      variant: 'secondary',
      text: 'NEW'
    },
    attributes: { disabled: true },
  }/* ,
  {
    name: 'Download CoreUI',
    url: 'http://coreui.io/angular/',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success',
    attributes: { target: '_blank', rel: 'noopener' }
  },
  {
    name: 'Try CoreUI PRO',
    url: 'http://coreui.io/pro/angular/',
    icon: 'icon-layers',
    variant: 'danger',
    attributes: { target: '_blank', rel: 'noopener' }
  } */
];
