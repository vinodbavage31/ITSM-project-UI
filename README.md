# ITSM Predictive Automation & Risk Mitigation - Frontend

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**A modern, interactive web interface for visualizing ITSM incident predictions and analytics**

[ Live Demo](https://itsm-project-ui.vercel.app/) | [ Backend Repository](https://github.com/vinodbavage31/ITSM-dataset-ML)

</div>

---

##  Table of Contents

- [About The Project](#-about-the-project)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
- [Project Structure](#-project-structure)
- [Backend Integration](#-backend-integration)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

##  About The Project

This is the **frontend interface** for the ITSM (IT Service Management) Predictive Automation project. It provides an intuitive dashboard to interact with machine learning models that predict incident priorities, forecast ticket volumes, and automate department tagging.

The frontend seamlessly visualizes the insights from the ML pipeline built on a **45,000+ record ITSM dataset**, achieving:
-  **96% Accuracy** in High Priority Prediction
-  **75% Accuracy** in Department Auto-Tagging
-  **98% F1-Score** in RFC Failure Prediction

---

##  Tech Stack

### Core Technologies

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | UI Framework | ^18.3.1 |
| **TypeScript** | Type Safety | ^5.6.2 |
| **Vite** | Build Tool & Dev Server | ^6.0.3 |
| **Tailwind CSS** | Styling Framework | ^3.4.17 |
| **shadcn/ui** | Component Library | Latest |

### Development Tools

- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Bun** - Fast package manager (alternative to npm)
- **Vercel** - Deployment platform

### Key Libraries

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "typescript": "^5.6.2",
  "vite": "^6.0.3",
  "tailwindcss": "^3.4.17"
}
```

---

##  Features

-  **Modern UI/UX** - Clean, responsive interface built with shadcn/ui components
-  **Interactive Dashboards** - Visualize ML model predictions and analytics
-  **Fast Performance** - Powered by Vite for lightning-fast development and builds
-  **Responsive Design** - Works seamlessly across desktop, tablet, and mobile
-  **Type-Safe** - Full TypeScript support for better developer experience
-  **Optimized Build** - Production-ready optimizations with Vite

---

##  Getting Started

### Prerequisites

Before you begin, ensure you have one of the following installed:

- **Node.js** (v18.0.0 or higher) - [Download](https://nodejs.org/)
- **Bun** (v1.0.0 or higher) - [Download](https://bun.sh/)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/vinodbavage31/ITSM-dataset-ML.git
cd ITSM-dataset-ML
```

2. **Install dependencies**

Using npm:
```bash
npm install
```

Or using Bun (faster):
```bash
bun install
```

### Running Locally

1. **Start the development server**

Using npm:
```bash
npm run dev
```

Or using Bun:
```bash
bun run dev
```

2. **Open your browser**

Navigate to `http://localhost:5173` (or the port shown in your terminal)

3. **Start developing!**

The app will automatically reload when you make changes to the code.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

---

##  Project Structure

```
ITSM-dataset-ML/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── styles/            # Global styles
│   └── utils/             # Utility functions
├── components.json         # shadcn/ui configuration
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML entry point
├── package.json           # Dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

---

##  Backend Integration

This frontend connects to the ML backend that handles:

- **Priority Prediction Models** - Random Forest classifier with 96% accuracy
- **Department Auto-Tagging** - Multi-class classification with 75% accuracy
- **Incident Forecasting** - Time series models for volume prediction
- **RFC Failure Prediction** - XGBoost model with 98% F1-score

Backend Repository: [ITSM-dataset-ML](https://github.com/vinodbavage31/ITSM-dataset-ML)

---

##  Deployment

The application is deployed on **Vercel** for optimal performance and global CDN distribution.

**Live Demo:** [https://itsm-project-ui.vercel.app/](https://itsm-project-ui.vercel.app/)

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vinodbavage31/ITSM-dataset-ML)

---

##  Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

# 📄 License

This project is part of an academic/portfolio demonstration for data science and machine learning capabilities.

---

##  Contact

**Vinod Bavage**

- GitHub: [@vinodbavage31](https://github.com/vinodbavage31)
- Project Link: [https://github.com/vinodbavage31/ITSM-dataset-ML](https://github.com/vinodbavage31/ITSM-dataset-ML)
- Live Demo: [https://itsm-project-ui.vercel.app/](https://itsm-project-ui.vercel.app/)

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Vercel](https://vercel.com/)
- ABC Tech for the ITSM dataset

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Vinod Bavage](https://github.com/vinodbavage31)

</div>
