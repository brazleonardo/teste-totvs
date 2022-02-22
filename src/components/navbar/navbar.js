class Navbar extends HTMLElement {
  constructor() {
    super();

    this.items = [];
  }

  connectedCallback() {
    this.items = this.getAttribute("items");

    this.render();

    const elemMenu = document.querySelector(".totvs__open--menu-mobile");
    elemMenu.onClick = () => this.handleOpenMenu();

    const elemCloseMenu = document.querySelector(".totvs__menu--close button");
    elemCloseMenu.onClick = () => this.handleCloseMenu(event);

    const elem = this.querySelectorAll(".totvs__menu li a");
    for (item of elem) {
      item.onClick = (param) => this.handleOpenCart(event, param);
    }
  }

  handleOpenMenu() {
    document.querySelector(".totvs__navbar").classList.add("totvs__show--menu");
  }

  handleCloseMenu() {
    event.preventDefault();

    document
      .querySelector(".totvs__navbar")
      .classList.remove("totvs__show--menu");
  }

  handleOpenCart(event, id) {
    event.preventDefault();

    if (id === 2) {
      document.body.classList.toggle("totvs__show--cart");
      const node = document.createElement("li");
      node.classList.add("totvs__mask--cart");
      node.addEventListener("click", () => {
        document.querySelector(".totvs__mask--cart").remove();
        document.body.classList.remove("totvs__show--cart");
      });
      document.querySelector("body").appendChild(node);
      return;
    }

    document.body.classList.remove("totvs__show--cart");
  }

  render() {
    this.innerHTML = `
      <nav class="totvs__navbar">
          <img src="/dist/images/logo.png" alt="Totvs" />
          <ul class="totvs__menu">
              <li><a href="#" onclick="onClick(1)"><span class="icon icon-home3"></span> Home</a></li>
              <li><a href="#" onclick="onClick(2)"><span class="icon icon-cart"></span> Carrinho</a></li>
              <li class="totvs__menu--close"><button type=button"" href="#" onclick="onClick()" class="totvs__cart--close">×</button></li>
          </ul>
          <button type="button" class="totvs__open--menu-mobile" onclick="onClick()">
            <span></span>
          </button>
      </nav>
    `;
  }
}

customElements.define("app-navbar", Navbar);
