# ChatBot
# Nexus | Premium Support Portal & Chatbot

A modern, visually stunning support portal with an integrated interactive chatbot. Built with a focus on UI/UX, this project features a dark-mode aesthetic, vibrant gradients, fluid micro-animations, and glassmorphism elements.

## Features

- **Stunning UI**: Premium dark mode design with glassmorphism overlays and background orbs.
- **Interactive Chat Widget**: A bottom-right floating chat widget that pulses to draw attention.
- **Mock Helpdesk Bot**: An integrated chatbot UI that greets users, offers quick-reply walkthrough options, handles typing indicators, and simulates conversation delays.
- **Fully Responsive**: Adapts seamlessly to both desktop and mobile screens.
- **No Dependencies**: Built entirely with Vanilla HTML, CSS, and JavaScript.

## Technologies Used

- **HTML5**: Semantic structuring.
- **CSS3**: CSS Variables, Flexbox, Grid, advanced animations (`@keyframes`), and backdrop-filters.
- **Vanilla JavaScript**: DOM manipulation, event handling, and simulated async bot logic.
- **Font Awesome**: Iconography.
- **Google Fonts**: Custom typography (Outfit).

## Getting Started

Since this project has no backend or build dependencies, running it is incredibly simple.

### Running Locally

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo-name
   ```
3. Open `index.html` in your favorite web browser.
   - *Optional:* Run a local server via Node (`npx http-server`) or Python (`python -m http.server`) for a better local development experience.

### Deployment

This project is a static site and can be hosted for free on platforms like **GitHub Pages**, **Netlify**, or **Vercel**.

**For GitHub Pages:**
- Go to your repository settings.
- Navigate to the **Pages** section.
- Select your `main` branch as the source and save. Your site will be live within minutes!

## Customization

- **Styling**: All colors and theme variables are defined at the top of `styles.css` in the `:root` block. Modify these to match your brand.
- **Chatbot Logic**: The simulated bot responses and quick-reply options are defined in the `processBotResponse` function within `script.js`.

---
*Designed & built as a premium mock experience.*
