# Movie App

A simple and elegant movie search application built with React, Vite, and Tailwind CSS. This application allows users to search for movies using the OMDb API and view the search results in a clean and modern interface.

## Features

-   **Movie Search:** Search for movies by title.
-   **Real-time Search:** The application uses a debounce function to search for movies as you type.
-   **Loading and Error States:** The application displays loading and error messages to the user.
-   **Responsive Design:** The application is fully responsive and works on all screen sizes.

## Technologies Used

-   [React](https://reactjs.org/)
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
