import PageComponent from './PageComponent.js';

class About extends PageComponent {
  constructor() {
    super();
    this.setTitle('About :: Stylish Vanilla App');
  }

  async render() {
    return `
      <h1>Abot Stylish Vanilla App</h1>
      <p>Create Single Page Application with Vanilla JS. No framework!</p>
      <a href="/" data-link>Home</a>
    `;
  }
}

export default About;
