import productTemplate from "./template.hbs";
import {products} from "./data";

const searchResults = document.getElementById("searchResults");
document.getElementById("searchButton").addEventListener("click", () => {
    const str = document.getElementById("searchInput").value.toLowerCase();
    if(str === "") {
        return;
    }
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(str));
    searchResults.innerHTML = "";
    filteredProducts.forEach(product => {
        searchResults.innerHTML += productTemplate(product);
    });
});