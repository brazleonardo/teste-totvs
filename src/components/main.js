import "./navbar";
import "./banner";
import "./product";
import "./cart";

class Main extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <main class="app">
        <app-navbar></app-navbar>
        <app-banner
          heading="Soluções Totvs"
          subheading="Escolha sua ferramenta">
        </app-banner>
        <section class="totvs__container">
          <app-product></app-product>
        </section>
        <app-cart></app-cart>
      </main>
    `;
  }
}

customElements.define("app-main", Main);
