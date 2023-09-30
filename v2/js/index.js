$(document).ready(function() {
/* Article columns *////////////////////////////////////////////
// Get a reference to the article container
const articleContainer = document.querySelector('.article-container');

// Get all the articles within the container
const articles = articleContainer.querySelectorAll('.article');

// Define the number of columns (in this case, 3)
const numColumns = 3;

// Calculate the number of articles per column
const articlesPerColumn = Math.ceil(articles.length / numColumns);

// Create an array to hold the articles grouped by columns
const columns = [];

// Split the articles into columns
for (let i = 0; i < numColumns; i++) {
    columns.push(Array.from(articles).slice(i * articlesPerColumn, (i + 1) * articlesPerColumn));
}

// Create new div elements for the columns
for (let i = 0; i < numColumns; i++) {
    const columnDiv = document.createElement('div');
    columnDiv.className = 'column';
    
    // Append articles to the respective column div
    columns[i].forEach((article) => {
        columnDiv.appendChild(article);
    });

    // Append the column div to the article container
    articleContainer.appendChild(columnDiv);
}
});