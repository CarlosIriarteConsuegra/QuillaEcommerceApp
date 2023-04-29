export const drawerItemsMain = [
  {
    key: 'Home',
    title: 'Inicio',
    routes: [{nav: 'MainDrawer', routeName: 'Home', title: 'Home'}],
  },
  {
    key: 'Settings',
    title: 'Configuracion',
    routes: [
      {nav: 'MainDrawer', routeName: 'Settings1', title: 'Usuario'},
      {nav: 'MainDrawer', routeName: 'Settings2', title: 'General'},
    ],
  },
];
