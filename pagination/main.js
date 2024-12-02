import { URL } from './constants';
import './style.css'




document.addEventListener("DOMContentLoaded", function () {
  const rootElement = document.querySelector("#app");
  let products = [];
  let activePage = 1;




  const fetchProductData = async () => {
    try {
      const resp = await fetch(URL);
      const respJson = await resp.json();
      console.log({ respJson })
      products = respJson.products;
      console.log({ products })
      render();
    } catch (err) {
      console.log(err);
    }
  }

  // console.log({ products })


  function render() {
    const productsContainer = document.createElement("div");
    // productsContainer.classList.add("products");

    if (products.length > 0) {
      for (let i = (activePage - 1) * 10 + 1; i <= activePage * 10; i++) {
        const prod = document.createElement("div");
        prod.innerText = products[i - 1].title;
        productsContainer.appendChild(prod);
      }

      rootElement.appendChild(productsContainer);



      const pageTabs = document.createElement("div");
      let tabsCount = products.length / 10;
      console.log({ products })
      console.log(products.length)
      // tabsCount = tabsCount % 10 ? tabsCount + 1 : tabsCount;
      console.log({ tabsCount })

      for (let i = 0; i < tabsCount; i++) {
        // console.log("tabsss")
        const tab = document.createElement("button");
        tab.innerText = i + 1;
        console.log({ tab })
        pageTabs.appendChild(tab);
        tab.addEventListener("click", function () {
          activePage = i + 1;
          rootElement.removeChild(productsContainer);
          rootElement.removeChild(pageTabs);
          render();
        })
      }

      rootElement.appendChild(pageTabs)


    }


  }



  fetchProductData();
})

