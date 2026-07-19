# Travel Trucks

A web application for searching and booking campers.

## Technologies

- React
- Vite
- Redux Toolkit
- React Router
- Axios
- CSS Modules

## Installation and Setup

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project folder

```bash
cd travel-trucks-project
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

After starting the application, open the URL provided by Vite:

```bash
http://localhost:5173/
```

## Available Scripts

### Start development server

```bash
npm run dev
```

### Build the project

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Run ESLint check

```bash
npm run lint
```

## Project Structure

```text
src/
 ├── components/     # Reusable UI components
 ├── pages/          # Application pages
 ├── redux/          # Redux store, slices and operations
 ├── images/         # Images and SVG sprite
 ├── App.jsx
 └── main.jsx
```

## Features

- Browse camper catalog
- Filter campers by parameters
- View detailed camper information
- Image gallery
- Camper reviews
- Booking form
- Redux Toolkit state management

## API

Camper data is fetched from:

```text
https://66b1f8e71ca8ad33d4f5f63e.mockapi.io
```

## Environment

Before running the project, make sure you have:

```bash
node -v
npm -v
```

installed on your computer.

Recommended versions:

```text
Node.js >= 18
npm >= 9
```

## Author

Created as a React development project.
