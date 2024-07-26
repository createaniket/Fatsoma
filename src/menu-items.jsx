const menuItems = {
  items: [
    {
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      icon: 'icon-navigation',
      children: [
        {
          id: 'dashboard',
          title: 'Dashboard',
          type: 'item',
          icon: 'feather icon-home',
          url: '/app/dashboard/analytics'
        }
      ]
    },
    {
      id: 'utilities',
      title: 'Utilities',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'component',
          title: 'Trade',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            {
              id: 'members-trade',
              title: 'Members',
              type: 'item',
              url: '/app/admin/trade/contributions'
            },
            {
              id: 'button-mbmb',
              title: 'Members Contribution',
              type: 'item',
              url: '/app/admin/trade/contributions/member'
            },        
          ]
        }
      ]
    },

    {
      id: 'events',
      title: 'Events',
      type: 'group',
      icon: 'icon-ui',
      children: [
        {
          id: 'events',
          title: 'Events',
          type: 'collapse',
          icon: 'feather icon-box',
          children: [
            {
              id: 'buttons-allevents',
              title: 'All Events',
              type: 'item',
              url: '/app/admin/events/viewall'
            },
            {
              id: 'addevent',
              title: 'Add Event',
              type: 'item',
              url: '/app/admin/events/add'
            },

            {
              id: 'allhalls',
              title: 'All Halls',
              type: 'item',
              url: '/app/admin/events/hall/all'
            },

            {
              id: 'addhall',
              title: 'Add Hall',
              type: 'item',
              url: '/app/admin/events/hall/add'
            },

            {
              id: 'allstalls',
              title: 'All Stalls',
              type: 'item',
              url: '/app/admin/events/stall/all'
            },

        
          ]
        },
      ]
    },
    // {
    //   id: 'auth',
    //   title: 'Authentication',
    //   type: 'group',
    //   icon: 'icon-pages',
    //   children: [
    //     {
    //       id: 'sign in',
    //       title: 'Login',
    //       type: 'item',
    //       icon: 'feather icon-lock',
    //       url: '/auth/signin-1',
    //       target: true,
    //       breadcrumbs: false
    //     },
    //     {
    //       id: 'sign Up',
    //       title: 'Register',
    //       type: 'item',
    //       icon: 'feather icon-log-in',
    //       url: '/auth/signup-1',
    //       target: true,
    //       breadcrumbs: false
    //     },
    //     {
    //       id: 'reset-pass',
    //       title: 'Reset Password',
    //       type: 'item',
    //       icon: 'feather icon-unlock',
    //       url: '/auth/reset-password-1',
    //       target: true,
    //       breadcrumbs: false
    //     }
    //   ]
    // },
    
  ]
};

export default menuItems;
