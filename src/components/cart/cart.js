const data = [
  {
    id: 1,
    image: "https://brazleonardo.github.io/teste-totvs/dist/images/agro.png",
    title: "Agro",
    price: "R$ 59,00",
  },
  {
    id: 2,
    image:
      "https://brazleonardo.github.io/teste-totvs/dist/images/construcao.png",
    title: "Construção",
    price: "R$ 69,00",
  },
  {
    id: 3,
    image:
      "https://brazleonardo.github.io/teste-totvs/dist/images/educacional.png",
    title: "Educacional",
    price: "R$ 79,00",
  },
  {
    id: 4,
    image:
      "https://brazleonardo.github.io/teste-totvs/dist/images/logistica.png",
    title: "Logística",
    price: "R$ 89,00",
  },
  {
    id: 5,
    image:
      "https://brazleonardo.github.io/teste-totvs/dist/images/manufatura.png",
    title: "Manufatura",
    price: "R$ 95,90",
  },
  {
    id: 6,
    image: "https://brazleonardo.github.io/teste-totvs/dist/images/saude.png",
    title: "Saúde",
    price: "R$ 99,00",
  },
];

class Cart extends HTMLElement {
  constructor() {
    super();
  }

  cartEmpty() {
    return `
      <div class="totvs__cart--empty">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45" height="45" viewBox="0 0 16 16">
          <path fill="#999" d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"></path>
          <path fill="#999" d="M7 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path>
          <path fill="#999" d="M11 6c0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.552 0.448-1 1-1s1 0.448 1 1z"></path>
          <path fill="#999" d="M11.3 12.3c-0.7-1.1-2-1.8-3.3-1.8s-2.6 0.7-3.3 1.8l-0.8-0.6c0.9-1.4 2.4-2.2 4.1-2.2s3.2 0.8 4.1 2.2l-0.8 0.6z"></path>
        </svg>
        <h3>SEU CARRINHO ESTÁ VAZIO :(</h3>
      </div>
    `;
  }

  getData() {
    const itemCart =
      localStorage.getItem("@totvs__cart") !== null
        ? JSON.parse(localStorage.getItem("@totvs__cart"))
        : [];

    if (itemCart.length > 0) {
      const template = (item) =>
        `<div class="totvs__cart--item">
          <div class="totvs__cart--group">
            <figure>
              <img src="${item.image}" />
            </figure>
            <h4 class="totvs__cart--name">${item.title}</h4>
          </div>
          <div class="totvs__cart--group">
            <span class="totvs__cart--price">${item.price}</span>
            <a href="#" onclick="onClick(${item.id})"class="totvs__cart--remove">×</a>
          </div>
        </div>`;

      let result = "";

      itemCart?.map((item) => {
        result += template(data?.find((d) => d.id === item));
      });

      return result;
    }

    return this.cartEmpty();
  }

  handleRemoveItemCart(event, id) {
    event.preventDefault();

    const itemCart = JSON.parse(localStorage.getItem("@totvs__cart"));
    const removeItemCart = itemCart.filter((item) => item !== id);

    localStorage.setItem("@totvs__cart", JSON.stringify(removeItemCart));

    event.target.closest(".totvs__cart--item").remove();

    if (itemCart.length === 1) {
      document.querySelector(".totvs__cart--body").innerHTML = this.cartEmpty();
    }
  }

  handleClose(event) {
    event.preventDefault();
    document.querySelector(".totvs__mask--cart").remove();
    document.body.classList.remove("totvs__show--cart");
  }

  connectedCallback() {
    this.render();
    this.querySelector(".totvs__cart--close").onClick = () =>
      this.handleClose(event);

    const elem = this.querySelectorAll(
      ".totvs__cart--item .totvs__cart--remove"
    );
    for (item of elem) {
      item.onClick = (id) => this.handleRemoveItemCart(event, id);
    }
  }

  render() {
    this.innerHTML = `
      <aside class="totvs__cart">
        <header class="totvs__cart--header">
          <a href="#" onclick="onClick()" class="totvs__cart--close">×</a>
          <h3>Carrinho</h3>
          <a class="totvs__cart--user"><span class="icon icon-user"></span></a>
        </header>
        <div class="totvs__cart--body">
          ${this.getData()}
        </div>
      </aside>
    `;
  }
}

customElements.define("app-cart", Cart);
