# Portfolio Website - React JS

Welcome to my Portfolio Website repository! This project was built using **React.js** and **React Router** to create a dynamic, responsive portfolio website where I showcase my skills, projects, and contact information.

## Overview

This repository contains the code for my personal portfolio website. It demonstrates my experience with web development, front-end technologies like React.js, and routing with **React Router DOM**. The site is deployed using **GitHub Pages** and automatically updated with every push to the `gh-pages` branch.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **React Router DOM**: For adding navigation and routing between pages.
- **GitHub Pages**: For hosting and deploying the portfolio website.

## Features

- **Home Page**: Showcases an introduction and links to my projects and skills.
- **About Page**: Details my background, career, and professional journey.
- **Projects Page**: Displays a list of my past projects with links and descriptions.
- **Contact Page**: Provides a way for visitors to get in touch with me.

## Getting Started

### 1. Clone the Repository

To get started, clone this repository to your local machine:

git clone https://github.com/tenthin/firstsem-react-project.git

### 2. Install Dependencies

cd portfolio-website
npm install

npm install puppeteer lighthouse

This will install all the necessary packages defined in package.json.

### 3.  Run the Development Server

npm start

This will launch the app in your browser, typically at http://localhost:3000. Any changes you make to the code will be automatically reflected in the browser.

### 4. Making Changes

To make changes to your portfolio, modify the components and pages in the `src` folder:

- **App.js**: The main component where the app routes are defined.
- **Pages/Directory**: Contains the different pages of your portfolio such as `Home.js`, `About.js`, `Projects.js`, etc.
- **Components/Directory**: Reusable components such as headers, footers, project cards, etc.

After making changes, you can see the updates by running `npm start`.

### 5. Building for Production

npm run build

This will create an optimized production build in the build/ folder, ready for deployment.

## Deployment to GitHub Pages

The portfolio website is deployed to GitHub Pages. Here's how the deployment process works:

### 1. Push Changes to main Branch

Push all your changes to the main branch.

git add .
git commit -m "Updated portfolio"
git push origin main

### 2. Build and Deploy with npm run deploy

To deploy your changes to GitHub Pages, run the following command in your terminal:

npm run deploy

This command does the following:

- Builds the project (creates the `build/` directory).
- Pushes the contents of the `build/` folder to the `gh-pages` branch.
- The website will automatically be live at `https://tenthin.github.io/firstsem-react-project/`.

**Note**: Ensure you have correctly configured the `homepage` field in your `package.json` to point to the GitHub Pages URL (e.g., `https://your-username.github.io/portfolio-website/`).

## Contributing

Feel free to contribute to the project by forking this repository and submitting a pull request. If you'd like to report an issue or suggest new features, open an issue under the Issues tab.

### How to Contribute:

1. **Fork the repository.**
2. **Create a new branch**: (git checkout -b feature-name).
3. **Make your changes** 
4. **Commit the changes**: (git commit -m 'Add new feature').
5. **Push the changes to your forked repository**: (git push origin feature-name).
6. **Submit a pull request to the main branch.**
