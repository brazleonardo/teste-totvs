class Banner extends HTMLElement {
  constructor() {
    super();

    this.heading = "";
    this.subheading = "";
  }

  connectedCallback() {
    this.heading = this.getAttribute("heading");
    this.subheading = this.getAttribute("subheading");

    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="totvs__banner">
        <div class="totvs__banner--inner">
          <h1>${this.heading}</h1>
          <p>${this.subheading}</p>
        </div>
      </section>
      `;
  }
}

customElements.define("app-banner", Banner);
