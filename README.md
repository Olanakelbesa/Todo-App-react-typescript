# ToDo App

A simple ToDo application built with React and TypeScript. This app allows users to add, edit, delete, and mark tasks as completed.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the Application](#running-the-application)
4. [Project Structure](#project-structure)
5. [Components](#components)
   - [Todo.tsx](#todotsx)
   - [TodoForm.tsx](#todoformtsx)
6. [Services](#services)
   - [todoService.ts](#todoservicets)
7. [Types](#types)
   - [todo.d.ts](#tododts)
8. [Screenshot](#screenshot)
9. [Contributing](#contributing)
10. [License](#license)

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Responsive design

## Technologies Used

- React
- TypeScript
- CSS
- [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your local machine:

- Node.js (>= 12.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/todo-app-react-typescript.git
2. Navigate to the project directory
   ```bash
   cd todo-app-react-typescript
3. Install dependencies
   ```bash
   npm install
   
### Running the Application
To start the development server, run:
```bash
 npm start
```

## Project Structure
```bash
.
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── Todo.tsx
│   │   └── TodoForm.tsx
│   ├── services
│   │   └── todoService.ts
│   ├── types
│   │   └── todo.d.ts
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   └── ...
├── README.md
└── package.json
```
## Components
### Todo.tsx
The Todo component is responsible for displaying the list of tasks, and providing functionalities to edit, delete, and mark tasks as completed.

### TodoForm.tsx
The TodoForm component provides a form for adding new tasks.

### Services
#### todoService.ts
The TodoService manages the CRUD operations for the tasks.

### Types
#### todo.d.ts
Defines the TypeScript types used in the project.

## Screenshot
![Screenshot 2024-08-01 173804](https://github.com/user-attachments/assets/11d20a54-096f-4dd8-8a10-64f31820cbc1)


