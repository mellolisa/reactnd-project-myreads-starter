# MyReads Project

This is a Udacity project that demonstrates creating a React application. The MyReads app allows the user to pull a list of books from a service and categorize them on bookshelves. The three supported shelves are: Currently Reading, Want to Read and Already Read. In addition, the user can search for more books that are not on shelves and choose to add books from those results onto one of the shelves.

The rubric for this project is located here: https://review.udacity.com/#!/rubrics/918/view

## How to run the application

To get started using the application right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

The main page of the application is at the root (http://localhost:3000/) and the search page can be accessed at /search.

To move a book to a different shelf, click on the green circle with the triangle for the book you'd like to move. Then, select the desired shelf.

To search for more books to add, click the green circle with the + sign on the bottom right of the page.

## Search Limitations

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Authors

- **Lisa M. Venezia**

## Acknowledgments

- Maeva NAP's study jam video was a huge help - https://www.youtube.com/watch?v=i6L2jLHV9j8
- I also got some help from Ryan Waite's tutorial - https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is for a Udacity student project. We will not be accepting pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
