const menu = [
    {
      name: 'Home',
      link: '/',
      items: [],
    },
    {
      name: 'About',
      link: '/about',
      items: [],
    },
    {
      name: 'Products',
      link: '/products',
      items: [
        {
          name: 'Product 1',
          link: '/products/1',
          items: [],
        },
        {
          name: 'Product 2',
          link: '/products/2',
          items: [
            {
              name: 'Product 2.1',
              link: '/products/2/1',
              items: [],
            },
          ],
        },
      ],
    },
    {
      name: 'Services',
      link: '/services',
      items: [
        {
          name: 'Service 1',
          link: '/services/1',
          items: [
            {
              name: 'Service 1.1',
              link: '/services/1/1',
              items: [],
            },
          ],
        },
        {
          name: 'Service 2',
          link: '/services/2',
          items: [
            {
              name: 'Service 2.1',
              link: '/services/2/1',
              items: [],
            },
            {
              name: 'Service 2.2',
              link: '/services/2/2',
              items: [],
            },
          ],
        },
      ],
    },
  ];
  
  const menuContainer = document.querySelector('#menu-container');
  
  function createMenu(menu, parent) {
    const ul = document.createElement('ul');
  
    menu.forEach((item) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = item.name;
      a.href = item.link;
      a.target = "_blank";
      li.appendChild(a);
  
      if (item.items && item.items.length > 0) {
        const toggle = document.createElement('span');
        toggle.classList.add('sub-menu-toggle');
        li.appendChild(toggle);
  
        createMenu(item.items, li);
      }
  
      li.addEventListener('click', () => {
        const active = document.querySelector('.active');
        if (active) {
          active.classList.remove('active');
        }
        li.classList.add('active');
      });
  
      ul.appendChild(li);
    });
  
    parent.appendChild(ul);
  }
  
  createMenu(menu, menuContainer);