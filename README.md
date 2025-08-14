# 🌦 Weather-App

A simple and responsive web application built with **React** and **Vite** that lets you check the current temperature of any city in the world using the OpenWeatherMap API.

---

## 📌 Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [API Configuration](#api-configuration)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## 🚀 Demo

Live Preview: **[Click Here](https://weather-app-ankiit29.vercel.app)**


## ✨ Features
- Search weather by **city name**.
- Displays **current temperature**.
- Responsive design for mobile and desktop.
- Minimal UI for quick lookups.

---

## 🛠 Tech Stack
- **React** – UI library
- **Vite** – Build tool & dev server
- **CSS** – Styling
- **OpenWeatherMap API** – Weather data source

---

## ⚙ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ankiit29/Weather-App.git
   cd Weather-App
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Run the app locally**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

---

## 🔑 API Configuration

This app uses the **OpenWeatherMap API** for fetching weather data.

1. Create a free account at [OpenWeatherMap](https://openweathermap.org/api).
2. Generate an API key.
3. Create a `.env` file in the root directory:
   ```env
   VITE_API_KEY=your_api_key_here
   ```
4. Restart the development server.

---

## 📖 Usage
1. Open the app in your browser (local: `http://localhost:5173` or the deployed link).
2. Enter a city name (e.g., **New Delhi**).
3. View the current temperature instantly.

---

## 📂 Folder Structure

```
Weather-App/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   ├── App.jsx          # Main app component
│   ├── index.jsx        # Entry point
│   └── styles.css       # Global styles
├── .env.example         # Example API key file
├── package.json         # Project metadata
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

---

## 🤝 Contributing
Contributions are welcome!  

1. Fork the project.
2. Create your feature branch:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some AmazingFeature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request.

---

## 📜 License
This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 🙌 Acknowledgements
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [OpenWeatherMap](https://openweathermap.org/)
- Inspiration from various open-source weather app projects

---
