# Supna Website

A premium, minimalist website for the streetwear brand **Supna**. Built with React, Vite, and Framer Motion.

## Features

*   **Design**: Strict Black & White aesthetic with a toggleable Dark/Light mode.
*   **Animations**: Smooth page transitions and micro-interactions using Framer Motion.
*   **Sections**:
    *   **Home**: Landing page with waitlist CTA.
    *   **Products**: Grid showcase of the latest collection.
    *   **Archive**: Masonry-style gallery of inspiration and past works.
    *   **Waitlist**: Functional email signup form integrated with EmailJS.
    *   **Terms**: Clean legal text display.

## Tech Stack

*   **Framework**: React + Vite
*   **Styling**: Vanilla CSS + CSS Variables (Theming)
*   **Animation**: Framer Motion
*   **Routing**: React Router DOM
*   **Backend Services**: EmailJS (for Waitlist)

## Getting Started

### 1. Installation

Clone the repository and install dependencies:

```bash
npm install
```

### 2. Environment Configuration

Create a `.env` file in the root directory to store your EmailJS credentials. You can copy the structure below:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> **Note:** The `.env` file is gitignored to keep your API keys secure.

### 3. Running Locally

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:5173` to view the site.

## Project Structure

*   `src/components`: Reusable UI components (Navbar, Footer, ThemeToggle).
*   `src/pages`: Individual route views (Home, Products, Archive, etc.).
*   `src/assets`: Static images and inspirations.
*   `src/index.css`: Global styles and theme variables.
