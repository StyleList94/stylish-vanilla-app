import PageComponent from './PageComponent.js';

class Home extends PageComponent {
  constructor() {
    super();
    this.setTitle('Stylish Vanilla App');
  }

  async render() {
    return `
      <h1>Stylish Vanilla App</h1>
      <p>Stylish Vanilla JS Single Page Application</p>
      <a href="/about" data-link>About</a>
    `;
  }
}

export default Home;
