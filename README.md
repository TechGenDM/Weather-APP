# 🌤️ Weather App

A real-time weather application built with **React 19** and **Vite**. Search any city and instantly get current weather conditions including temperature, humidity, wind speed, and more.

---

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Real-time temperature, humidity, and wind data
- 🌥️ Dynamic weather condition icons and descriptions
- ⚡ Fast and lightweight — powered by Vite

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI framework |
| Vite | Build tool & dev server |
| CSS | Styling |
| OpenWeatherMap API *(or similar)* | Weather data |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/TechGenDM/Weather-APP.git

# Navigate into the project
cd Weather-APP

# Install dependencies
npm install
```

### Environment Setup

This app requires a weather API key. Create a `.env` file in the root of the project:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

> You can get a free API key from [OpenWeatherMap](https://openweathermap.org/api).

### Running the App

```bash
# Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |

---

## 📁 Project Structure

```
Weather-APP/
├── public/          # Static assets
├── src/             # Application source code
│   ├── components/  # React components
│   ├── App.jsx      # Root component
│   └── main.jsx     # Entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).