# BETA - A Modern Web Experience Showcase

A showcase project demonstrating advanced front-end animations, interactions, and modern design patterns built with React. This project serves as a testament to what's possible in creating a cinematic and immersive user experience for a premium brand aesthetic.

_This is a fictional project for portfolio purposes._

---

### ✨ Key Features

This project is packed with modern, high-performance features designed to create a memorable user experience:

- **Futuristic Theme Toggle (Dark/Light Mode):** A seamless, animated theme switcher that transitions the entire application's color palette.
- **Interactive "Liquid Aurora" Background:** A GSAP-powered hero background with liquid-like blobs that react to the user's cursor, creating a "repel" effect.
- **Cinematic Splash Screen:** A "System Boot & Assembly" pre-loader with SVG path animation that ensures a polished first impression.
- **Advanced Page Transitions:** Fluid, animated transitions between pages using Framer Motion, eliminating jarring navigation.
- **Interactive Inverted Cursor:** A custom cursor that inverts colors based on the background and provides satisfying hover feedback.
- **"Scrollytelling" Experience:** Dedicated pages (`/explore` and the homepage) that use scroll-based animations to tell a story, revealing content dynamically.
- **Parallax Effects:** Subtle parallax on images and backgrounds to create a sense of depth and immersion, powered by `react-scroll-parallax`.
- **Component-Based Architecture:** A clean, organized, and scalable project structure with each component and page in its own module.
- **Fully Responsive Design:** A meticulously crafted layout that works flawlessly on desktop, tablet, and mobile devices.
- **Functional Contact Form:** Integrated with EmailJS to send real emails (requires configuration).

### 🛠️ Tech Stack

- **React:** Core front-end library.
- **Framer Motion:** For the splash screen, page transitions, and theme toggle animations.
- **GSAP (GreenSock Animation Platform):** For the high-performance, interactive hero background animation.
- **React Router DOM:** For client-side routing and multi-page architecture.
- **React Scroll Parallax:** For creating depth with parallax effects.
- **React Intersection Observer:** To trigger animations as elements enter the viewport.
- **CSS Variables:** For dynamic and transition-friendly theming.
- **EmailJS Browser:** For client-side email sending from the contact form.

### 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

#### Prerequisites

- Node.js (v16 or later)
- npm

#### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Anuvbis12/FFF.git
    cd FFF
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Set up Environment Variables for the Contact Form:**
    - Create a new file in the root of the project named `.env`.
    - Add your EmailJS credentials to this file. You can get these from your EmailJS account dashboard.

    ```
    REACT_APP_EMAILJS_SERVICE_ID=YOUR_SERVICE_ID
    REACT_APP_EMAILJS_TEMPLATE_ID=YOUR_TEMPLATE_ID
    REACT_APP_EMAILJS_PUBLIC_KEY=YOUR_PUBLIC_KEY
    ```
    _Note: You will also need to update `Contact.js` to read these environment variables instead of using hardcoded placeholders._

4.  **Run the development server:**
    ```sh
    npm start
    ```
    The application will open at [http://localhost:3000](http://localhost:3000).

### 📜 Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm test`: Launches the test runner in interactive watch mode.
- `npm run eject`: Ejects the app from Create React App's managed configuration (use with caution).

---

This project was built as a creative exercise to push the boundaries of modern web design and animation.
