import {CONSTANTS} from "./constants.js";

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
    let categories = await fetchCategories(CONSTANTS.apiUrl + "/categories");

    categories.forEach(function (category) {
        let categoryRow = document.createElement("tr");
        let categoryAnchor = document.createElement('a');

        categoryAnchor.href = './frase.html';
        categoryAnchor.textContent = category;
        categoryAnchor.onclick = function () {
            if (category) {
                localStorage.setItem(CONSTANTS.categoryStorageKey, category);
                window.location.href = "frase.html";
            }
        };

        CATEGORY_TABLE.appendChild(categoryRow);
        categoryRow.appendChild(categoryAnchor);
    });
};

