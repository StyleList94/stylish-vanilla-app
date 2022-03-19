import About from '../pages/About.js';
import Home from '../pages/Home.js';

const router = async () => {
  const routes = [
    { path: '/', Page: Home },
    { path: '/about', Page: About },
  ];

  const potentialMatches = routes.map((route) => ({
    route,
    isMatch: location.pathname === route.path,
  }));

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = { route: routes[0], isMatch: true };
  }

  const page = new match.route.Page();

  const appElement = document.querySelector('#app');

  appElement.innerHTML = await page.render();
};

const navigateTo = (to) => {
  history.pushState(null, null, to);
  router();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (event) => {
    if (event.target.matches('[data-link]')) {
      event.preventDefault();
      navigateTo(event.target.getAttribute('href'));
    }
  });

  router();
});
