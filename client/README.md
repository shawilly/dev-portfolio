# Dev Portfolio Site README

## Overview

Welcome to the Dev Dossier Site project! I've put this together to help others like me explore building their own portfolio. It is built using TypeScript, Node.js, and Three.js for interactive 3D graphics. Additionally, I plan on building more integrations directly into the dossier, including the ability to play chess together :).

## Features

- **TypeScript**: The project uses TypeScript to ensure type safety and better code quality.

- **Node.js**: Node.js is used for server-side scripting and as the backend environment.

- **Three.js**: Three.js is a powerful 3D graphics library for creating interactive 3D content in the browser. It is used to add a creative touch to your portfolio.

- **React + Vite**: Integrating React with Vite allows this site to provide you with faster development (HMR - Hot Module Replacement) and an improved development experience.

- **Tailwind**: A utility-first CSS framework for rapidly building custom user interfaces.

<h2 align="center">Tech Stack <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="40"></h2>

<p align="center">
<img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" width="40" height="40"/>
 &nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-original.svg" width="40" height="40"/>
 &nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" width="40" height="40"/>
 &nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" width="40" height="40"/> 
 &nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" width="40" height="40"/>
 &nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/express/express-original.svg" width="40" height="40"/>
 &nbsp;
</p>
<p align="center">
<img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" width="40" height="40"/>
 &nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" width="40" height="40"/>
 &nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-plain.svg" width="40" height="40"/>
 &nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/nextjs/nextjs-line.svg" width="40" height="40"/>
 &nbsp;
<img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original.svg" width="40" height="40"/>
 &nbsp;
<img src="https://www.svgrepo.com/show/353659/docker-icon.svg" width="40" height="40"/>
 &nbsp;
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Babel_Logo.svg/1200px-Babel_Logo.svg.png" width="40" height="40"/>
 &nbsp;
</p>
<br>

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/shawilly/dev-dossier.git
   ```

2. Install dependencies:

   ```bash
   cd dev-dossier
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000` to see the portfolio site in action.

## Project Structure

The project is organized as follows:

- **`src/`**: This directory contains the source code of the project.
- **`public/`**: Public assets like images and static files.

## Deployment

This `client` folder holds the site's code that will be visible. In order for the node server to show the most recent changes, you will have to run:

`npm run build`

Which will start the `vite` build of the client. Once built, you can follow the `README` in the main folder if you want to run the node server to make sure your build was successful before pushing.

## Contributing

I welcome contributions from the community! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository and create your branch from `main`.

2. Open a pull request with a clear description of your changes and the problem you are solving.

3. Please make sure your code follows the established coding style and passes linting checks.

## Issues and Bug Reports

If you encounter any issues or have suggestions for improvement, please [open an issue](https://github.com/shawilly/dev-dossier/issues) on GitHub. We appreciate your feedback and contributions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

We would like to thank the developers of the following Vite plugins for making the integration of React and Vite possible:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)

Their contributions have helped enhance the development experience for this project.

Happy coding!
