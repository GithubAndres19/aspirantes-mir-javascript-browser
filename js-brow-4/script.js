const menu = [
    {
        name: 'Home',
        link: '#'
    },
    {
        name: 'Productos',
        link: '#',
        items: [
            {
                name: 'Televisores',
                link: '#',
                items: [
                    {
                        name: 'LED',
                        link: '#'
                    },
                    {
                        name: 'LCD',
                        link: '#'
                    },
                    {
                        name: 'Smart TV',
                        link: '#'
                    }
                ]
            },
            {
                name: 'Smartphones',
                link: '#',
                items: [
                    {
                        name: 'Android',
                        link: '#'
                    },
                    {
                        name: 'iOS',
                        link: '#'
                    },
                    {
                        name: 'WEB OS',
                        link: '#'
                    }

                ]
            }
        ]
    },
    {
        name: 'Contacto',
        link: '#'
    }
];

const menuContainer = document.querySelector('#menu-container');

function createMenu(menu, parent) {
    const ul = document.createElement('ul');

    menu.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.name;
        a.href = item.link;
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