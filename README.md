# Movie Ticket Booking System

## Overview

This project is a Movie Ticket Booking System developed using React.js and Next.js. It allows users to select movies, choose the quantity of tickets, provide billing information, and generates a bill in PDF format.

## Features

1. **Movie Selection Interface:**
    - Display a list of available movies with details (title, description, price, etc.).
    - Allow users to select the quantity of tickets for each movie.
    - Users can select only one movie at a time.

2. **Price Calculation:**
    - Calculate the total price based on the selected quantity of tickets, including tax and discount.

3. **Billing Information Form:**
    - Create a form for users to enter billing information (fullname, email, address, etc.).
    - Implement form validation for proper input.

4. **Generation of Bill:**
    - Generate a bill in PDF format containing movie details, quantity, total price, and billing information.

5. **Integration and UI Design:**
    - Integrate components for seamless functionality.
    - Design a user-friendly interface for a pleasing user experience.

## Technologies Used

- React.js
- Next.js
- [TMDB API](https://www.themoviedb.org/documentation/api) for movie details
- [React PDF](https://react-pdf-viewer.dev/) for generating PDF

## How to Run Locally

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/movie-ticket-booking.git
    ```

2. Install dependencies:

    ```bash
    cd movie-ticket-booking
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

4. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Live Demo

The application is deployed on [Vercel](https://vercel.com/) at [Live Demo URL](your-live-demo-url).

## Challenges and Solutions

- The main challenge was to generate the pdf file using next.js. I researched about various libraries and implemented 2 to 3 library and was not able to generate the pdf. But finally i found react-pdf which helped me a lot in generating the pdf but the styling part was still hard since i had to use the internal css.

## Author

- Diwash Bhattarai
- 9863447740, diwashb999@gmail.com

