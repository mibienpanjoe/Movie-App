# Movie App

A simple and elegant movie search application built with React, Vite, and Tailwind CSS. This application allows users to search for movies using the OMDb API and view the search results in a clean and modern interface.

## Features

-   **Movie Search:** Search for movies by title.
-   **Real-time Search:** The application uses a debounce function to search for movies as you type.
-   **Movie Details:** Click on a movie to see more details, including the plot, actors, director, and more.
-   **Back to Search:** Easily navigate back to the search results from the movie details page.
-   **Loading and Error States:** The application displays loading and error messages to the user.
-   **Responsive Design:** The application is fully responsive and works on all screen sizes.

## Application Flow

1.  The user lands on the main page and is presented with a search bar.
2.  As the user types in the search bar, the application fetches and displays a list of movies that match the search query.
3.  The user can click on any movie card to view more details about that movie.
4.  The application navigates to a new page, displaying the movie's poster, plot, and other relevant information.
5.  The user can click the "Back to Search" button to return to the main search page.

## Technologies Used

-   [React](https://reactjs.org/)
-   [React Router](https://reactrouter.com/)
-   [Vite](https://vitejs.dev/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [OMDb API](http://www.omdbapi.com/)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js
-   npm

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/movie-app.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Create a `.env` file in the root of the project and add your OMDb API key.
    ```
    VITE_OMDb_API_KEY=your_api_key
    ```
4.  Start the development server
    ```sh
    npm run dev
    ```

## Live Demo

[Link to live demo]()

## Screenshots

![Screenshot of the application](./public/hero.png)

## License

Distributed under the MIT License. See `LICENSE` for more information.
