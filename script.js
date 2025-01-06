const products = [
    {
      id: 1,
      name: "Nike SB FC Classic",
      category: "Skate Shoes",
      colors: 2,
      price: 3695,
      tag: "Bestseller",
      image: "images/NIKE+SB+FC+CLASSIC.png",
    },
    {
      id: 2,
      name: "Nike SB Dunk Low Pro",
      category: "Skate Shoes",
      colors: 1,
      price: 6195,
      tag: "Promo Exclusion",
      image: "images/NIKE+SB+DUNK+LOW+PRO.png",
    },
    {
      id: 3,
      name: "Nike SB Force 58 Premium",
      category: "Skate Shoes",
      colors: 1,
      price: 4095,
      tag: null,
      image: "images/NIKE+SB+FORCE+58+PRM+L.png",
    },
  ];
  
  function renderProducts() {
    const productGrid = document.getElementById("products");
  
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product");

      const productImg = document.createElement("img");
      productImg.src = product.image;
      productImg.alt = product.name;
      productCard.appendChild(productImg);

      if (product.tag) {
        const tag = document.createElement("span");
        tag.classList.add("tag");
        tag.textContent = product.tag;
        productCard.appendChild(tag);
      }

      const name = document.createElement("h3");
      name.textContent = product.name;
      productCard.appendChild(name);

      const category = document.createElement("p");
      category.classList.add("category");
      category.textContent = product.category;
      productCard.appendChild(category);

      const colors = document.createElement("p");
      colors.classList.add("colors");
      colors.textContent = `${product.colors} Colour${product.colors > 1 ? "s" : ""}`;
      productCard.appendChild(colors);

      const price = document.createElement("p");
      price.classList.add("price");
      price.textContent = `₱${product.price.toLocaleString()}`;
      productCard.appendChild(price);

      productGrid.appendChild(productCard);
    });
  }

  document.addEventListener("DOMContentLoaded", renderProducts);

  
  