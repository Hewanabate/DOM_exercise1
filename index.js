//import "./styles.css";
// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog',
    href: '#',
    subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ],
  },
  {
    text: 'orders',
    href: '#',
    subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ],
  },
  {
    text: 'account',
    href: '#',
    subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ],
  },
];

// Part 1:
const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('flex-ctr');

// Part 2:
const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

// Part 3:
const nav = document.querySelector('nav');

for (var i = 0; i < menuLinks.length; i++) {
  var link = menuLinks[i];
  var menuItem = document.createElement('a');
  menuItem.textContent = link.text;
  menuItem.href = link.href;
  nav.appendChild(menuItem);
}

/////////////////////////////////////////////
//Part 2
///////////////////////////////////////////////
//Part 3: Creating the submenu


const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

//Part 4: Adding Menu Interaction
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog',
    href: '#',
    subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ],
  },
  {
    text: 'orders',
    href: '#',
    subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ],
  },
  {
    text: 'account',
    href: '#',
    subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ],
  },
];

//Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.

const topMenuLinks = topMenuEl.querySelectorAll('a');

topMenuEl.addEventListener('click', function (event) {
  event.preventDefault();

  if (!event.target.matches('a')) {
    return;
  }
  
  console.log(event.target.textContent);

  if (event.target.classList.contains('active')) {
    event.target.classList.remove('active');
  } else {
    //The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
    topMenuLinks.forEach(function (sublink) {
      sublink.classList.remove('active');
    });
    event.target.classList.add('active');
  }
});

// Part 5: Adding subMenu Interaction
topMenuEl.addEventListener('click', function (event) {
  event.preventDefault();
  if (!event.target.matches('a')) {
    return;
  }

  event.target.classList.toggle('active');

  if (event.target.classList.contains('active')) {

    const clickedlink = menuLinks.find(
      (sublink) => sublink.text === event.target.textContent
    );

    if (clickedlink.subLinks) {
      subMenuEl.style.top = "100%";
   
      buildSubmenu(clickedlink.subLinks);
    } else {
      subMenuEl.style.top = "0";
    }
  } 
});

// build function subMenu
function buildSubmenu(subLinks) {
  subMenuEl.innerHTML = "";
  subLinks.forEach(function (sublink) {
    const subMenuItem = document.createElement("a");
    subMenuItem.href = sublink.href;
    subMenuItem.textContent = sublink.text;
    subMenuEl.appendChild(subMenuItem);
  });
}

// delegated event listener to topMenuEl
topMenuEl.addEventListener('click', function (event) {
  event.preventDefault();
  if (!event.target.matches('a')) {
    return;
  }

  event.target.classList.toggle('active');
  if (event.target.classList.contains('active')) {
    const clickedLink = menuLinks.find(
      (sublink) => sublink.text === event.target.textContent
    );

    if (clickedLink.subLinks) {
      subMenuEl.style.top = '100%';
      
      buildSubmenu(clickedLink.subLinks);
    } else {
      subMenuEl.style.top = '0';
    }
  } 
});

subMenuEl.addEventListener('click', function (event) {
  event.preventDefault();

  if (!event.target.matches('a')) {
    return;
  }
  console.log(event.target.textContent);
  subMenuEl.style.top = '0';
  topMenuLinks.forEach(function (sublink) {
    sublink.classList.remove('active');
  });
  mainEl.innerHTML = "<h1>" + event.target.textContent + "</h1>";
});