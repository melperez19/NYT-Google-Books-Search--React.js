# NYT-Google-Books-Search--React.js

## Overview
This is a React-based Google Books Search application that requires the creation of React components, helper/util functions, and React lifecycle methods to query and display books based on user searches. Node, Express and MongoDB are also incorporated so that users can save books to review or purchase later.

![final-screenshot]()

This is a SPA (Single Page Application) that uses react-router-dom to navigate, hide and show the "Search" and "Saved" React components without changing the route within Express.

* "Search" - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

* "Saved" - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

[Click here to demo the app!]() 