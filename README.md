# 📓 To-Do List

A notebook-themed to-do list app built with vanilla JavaScript and webpack. Organise your tasks into folders, track priorities and due dates, and pick up right where you left off — everything persists in your browser via localStorage.

## Features

- Create and delete folders to organise your tasks
- Add tasks with a title, description, due date, and priority
- Check off tasks when done
- Data persists on page refresh via localStorage
- Notebook-inspired UI with handwritten fonts and ruled paper styling

## Tech Stack

- Vanilla JavaScript (ES Modules)
- Webpack 5 with webpack-merge for dev/prod configs
- CSS with Google Fonts (Indie Flower, Freckle Face)
- localStorage for data persistence

## Project Structure

```
src/
├── index.js        # Entry point
├── logic.js        # Data layer — classes and functions, no DOM
├── dom.js          # UI layer — rendering and event handling
├── template.html   # HTML template
└── styles.css      # Notebook-themed styles
```

## Getting Started

**Install dependencies**
```bash
npm install
```

**Start the dev server**
```bash
npm run dev
```

**Build for production**
```bash
npm run build
```

**Deploy to GitHub Pages**
```bash
npm run deploy
```

## Design Decisions

The app separates application logic from DOM manipulation into distinct modules. `logic.js` handles all data operations and knows nothing about the browser UI. `dom.js` handles all rendering and user interaction and calls into `logic.js` whenever data needs to change. This makes each part easier to reason about and debug independently.
