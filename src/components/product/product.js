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

class Product extends HTMLElement {
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

  addItemToCard(id) {
    const itemSelect = data?.find((item) => item.id === id);
    const wrapItem = document.createElement("div");
    const groupItem1 = document.createElement("div");
    const groupItem2 = document.createElement("div");
    const figureItem = document.createElement("figure");
    const imageItem = document.createElement("img");
    const nameItem = document.createElement("h4");
    const priceItem = document.createElement("span");
    const removeItem = document.createElement("a");

    wrapItem.classList.add("totvs__cart--item");

    groupItem1.classList.add("totvs__cart--group");
    groupItem2.classList.add("totvs__cart--group");

    imageItem.setAttribute("src", itemSelect.image);

    nameItem.textContent = itemSelect.title;

    priceItem.classList.add("totvs__cart--price");
    priceItem.textContent = itemSelect.price;

    removeItem.classList.add("totvs__cart--remove");
    removeItem.setAttribute("href", "#");
    removeItem.textContent = "×";
    removeItem.addEventListener("click", (event) =>
      this.handleRemoveItemCart(event, id)
    );

    figureItem.appendChild(imageItem);
    groupItem1.appendChild(figureItem);
    groupItem1.appendChild(nameItem);

    groupItem2.appendChild(priceItem);
    groupItem2.appendChild(removeItem);

    wrapItem.appendChild(groupItem1);
    wrapItem.appendChild(groupItem2);

    return wrapItem;
  }

  handleAddItemToCart(event, id) {
    event.preventDefault();

    document.body.classList.toggle("totvs__show--cart");
    const node = document.createElement("div");
    node.classList.add("totvs__mask--cart");
    node.addEventListener("click", () => {
      document.querySelector(".totvs__mask--cart").remove();
      document.body.classList.remove("totvs__show--cart");
    });
    document.querySelector("body").appendChild(node);

    const itemCart =
      localStorage.getItem("@totvs__cart") !== null
        ? JSON.parse(localStorage.getItem("@totvs__cart"))
        : [];

    if (itemCart.find((item) => item === id)) {
      return;
    }

    if (itemCart.find((item) => item !== id)) {
      const addItemCart = JSON.parse(localStorage.getItem("@totvs__cart"));
      console.log("add", addItemCart);
      addItemCart.push(id);
      localStorage.setItem("@totvs__cart", JSON.stringify(addItemCart));
      document
        .querySelector(".totvs__cart--body")
        .appendChild(this.addItemToCard(id));
      document.querySelector(".totvs__cart--empty")?.remove();
      return;
    }

    itemCart.push(id);
    localStorage.setItem("@totvs__cart", JSON.stringify(itemCart));
    document
      .querySelector(".totvs__cart--body")
      .appendChild(this.addItemToCard(id));
    document.querySelector(".totvs__cart--empty")?.remove();
  }

  connectedCallback() {
    this.render();

    const elem = this.querySelectorAll(".totvs__product--item");
    for (item of elem) {
      item.onClick = (id) => this.handleAddItemToCart(event, id);
    }
  }

  loop() {
    const template = (id, image, title) =>
      `<div class="totvs__product--item" onclick="onClick(${id})">
        <div class="totvs__product--item--inner">
          <div class="totvs__product--item--animate">
            <img src="${image}" />
            <h3>${title}</h3>
          </div>
        </div>
      </div>`;

    let result = "";

    data?.map((item) => (result += template(item.id, item.image, item.title)));

    return result;
  }

  render() {
    this.innerHTML = `
      <div class="totvs__products">
        ${this.loop()}
      </div>
    `;
  }
}

customElements.define("app-product", Product);
