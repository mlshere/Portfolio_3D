# Sherezade Maqueda Portfolio

Welcome to my personal portfolio! This project is a showcase of the skills and projects I've developed as a self-taught web developer, with a particular emphasis on front-end development. Through this portfolio, I aim to take you on a journey from my roots in media and gastronomy, through my exploration of UX design, and finally to my passion for web development. It also reflects my commitment to collaboration and continuous professional growth in the tech industry.

## Key Features

- **Animated Hero Section**: A dynamic introduction with animated elements that immediately engage the visitor.
- **Interactive 3D Earth Model**: Created using `three.js`, this Earth model adds an interactive and visually compelling element to the site.
- **Animated Section Elements**: Leveraging `framer motion`, various elements are animated as they appear on the screen, enhancing the user experience.
- **Tilt Animations**: Applied to cards in the Expertise and Work sections, the tilt effect adds a dynamic and modern touch to the presentation.
- **Timeline**: A detailed timeline in the About section that chronicles my personal, professional, and educational journey.

## Technologies Used

- **React**: The primary JavaScript library used to build the user interface.
- **Tailwind CSS**: For styling, providing a utility-first CSS framework.
- **Framer Motion**: For animations, adding smooth transitions and visual appeal.
- **Three.js**: Used to create the 3D Earth model and other 3D elements.
- **EmailJS**: For handling the contact form and sending emails directly from the portfolio.
- **React-Tilt**: Implemented to animate the project and expertise cards.

## Getting Started

To run this portfolio locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Build the project:**

    ```bash
    npm run build
    ```

4. **Run the development server:**

    ```bash
    npm run dev
    ```

5. **Visit the portfolio:**
   
   Open your browser and navigate to `http://localhost:5173` to see the portfolio in action.

## CI/CD

Two GitHub Actions workflows are included in `.github/workflows/`.

### `ci.yml` — Continuous Integration

Runs automatically on **every push and every pull request** to any branch.

| Step | Command |
|------|---------|
| Install dependencies | `npm ci` |
| Lint | `npm run lint` |
| Build | `npm run build` |

The workflow fails fast: if lint or build fails, the PR cannot pass review.

### `deploy.yml` — Deploy to Hostinger

Runs automatically when code is merged to the **`main`** branch.  
It builds the project and uploads the `dist/` folder to Hostinger via FTP.

#### Required GitHub Secrets

Before the deploy workflow can run you must add the following secrets in  
**Settings → Secrets and variables → Actions → New repository secret**:

| Secret name | Where to find it |
|-------------|-----------------|
| `HOSTINGER_FTP_SERVER` | Hostinger hPanel → Hosting → FTP Accounts → FTP hostname (e.g. `files.hostinger.com`) |
| `HOSTINGER_FTP_USERNAME` | Hostinger hPanel → Hosting → FTP Accounts → Username |
| `HOSTINGER_FTP_PASSWORD` | The password you set when creating the FTP account |
| `HOSTINGER_FTP_SERVER_DIR` | *(optional)* Remote directory, defaults to `/public_html/` |

#### Manual steps to finish deployment

1. Log in to [hPanel](https://hpanel.hostinger.com/) and open **Hosting → FTP Accounts**.
2. Create (or note) an FTP account and copy the hostname, username, and password.
3. Add the four secrets listed above to this GitHub repository.
4. Push a commit to `main` — the deploy workflow will build and upload automatically.
5. If Hostinger requires the `dist/` assets to live in a subfolder (e.g. `/public_html/portfolio/`), update `HOSTINGER_FTP_SERVER_DIR` accordingly.

## Future Enhancements

In future iterations, I plan to add a dedicated page for each project where I will detail the development process, challenges faced, and how each project has evolved over time.

## Screenshots

- **Hero Section**
  ![Screenshot 2025-02-07 at 20 47 16](https://github.com/user-attachments/assets/8ad66249-4856-4de5-a067-da2eb0d41380)

- **Expertise Section**
 ![Screenshot 2025-02-07 at 20 48 44](https://github.com/user-attachments/assets/27e519c6-e613-4839-993c-b01dafc9c913)

- **Work Section**
  ![Screenshot 2025-02-07 at 20 49 19](https://github.com/user-attachments/assets/20470562-6da8-4107-9852-65b684d324c3)

  
 ![Screenshot 2025-02-07 at 20 49 52](https://github.com/user-attachments/assets/0f8a25dc-806f-44a7-937d-d3b6e1120c70)


- **My Journey Section**
 ![Screenshot 2025-02-07 at 20 50 32](https://github.com/user-attachments/assets/d21a5080-0677-43b9-a5a3-5e3e8129b272)


- **Contact Section**
 ![Screenshot 2025-02-07 at 20 50 57](https://github.com/user-attachments/assets/a9de9cb1-79c1-4da8-b5a0-6dffaa6ecbde)



## Live Demo

The live demo of this portfolio is currently under development and will be available soon.

## Contact

Feel free to reach out to me via email at [mlsherezade@gmail.com](mailto:mlsherezade@gmail.com) or connect with me on [LinkedIn](https://www.linkedin.com/in/sherezade-maqueda-lafuente/).

## License

This project is licensed under the [MIT License](LICENSE).
