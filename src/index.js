import {Category} from "./model/Category";

const API_URL = "https://api.chucknorris.io/jokes";
const CATEGORY_TABLE = document.querySelector("#categories");

async function fetchCategories(url) {
    let data;
    let response;
    try {
        response = await fetch(url);

        if (response.ok) {
            data = response.json();
        }
    } catch (exception) {
        console.log(exception);
    }

    return data;
}

/**
 *
 * @param category {String}
 */

onload = async function () {
    const CATEGORIES = await fetchCategories(API_URL + "/categories");
    console.log(CATEGORIES);

    CATEGORIES.forEach(function (category) {
        let categoryRow = document.createElement("tr");
        let categoryAnchor = document.createElement('a');

        categoryAnchor.href = './frase.html';
        categoryAnchor.textContent = category;
        categoryAnchor.onclick = function () {
            window.location.href = "frase.html";
        };

        CATEGORY_TABLE.appendChild(categoryRow);
        categoryRow.appendChild(categoryAnchor);
    });
}