# Sharpify - AI-Powered Image Enhancer Application

Sharpify is an image enhancement application powered by PicWish AI. It allows users to effortlessly enhance image quality using powerful AI-based tools — all through a sleek and responsive interface built with React.


Live link: [Click here](https://sharpify-iota.vercel.app/)

## Table of Contents
  - [Getting Started](#getting-started)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Environment Variables](#environment-variables)

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone (https://github.com/ritammaity55/Sharpify.git)
    ```

2. **Install dependencies:**

    ```bash
    npm install  # or yarn install or pnpm install
    ```

3. **Set up environment variables:**

    Create a `.env.local` file in the root of your project and populate it with the required environment variable (see [Environment Variables](#environment-variables) section).

4. **Run the development server:**

    ```bash
    npm run dev  # or yarn dev or pnpm dev
    ```

    The application will be available at [http://localhost:5173](or the port you configured).

## Features

* ✨ **AI-powered image enhancement:** Utilizes PicWish AI to improve image clarity and quality.
* 📤 **Drag and drop upload:** Easily add images via drag-and-drop interface.
* ⚙️ **Real-time processing:** Instant preview and enhancement of uploaded images.
* 🔗 **Download enhanced images:** Users can download their enhanced images with one click.
* 📱 **Responsive design:** Works smoothly across devices and screen sizes.

## Technologies Used

* React.js  
* PicWish AI API  
* Tailwind CSS

## Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
API_KEY=<your_picwish_api_key>
