# Samadhan 2.0 – Stage 1 Progress

##
## Phase 1: JavaScript & Node.js Fundamentals
##


### Day 1: JavaScript Basics

- **Task:** Print student details from an object
- **Status:** ✅ Completed
- **Key Concepts Learned:**
  - Variables and data types
  - Console logging
  - Object properties
- **Enhancements Added:**
  - Added bilingual labels (English + Hindi)
- **Notes/Challenges:**
  - Node.js setup on a laptop
  - Learned basic Git push workflow

### Day 2: Functions & Loops

- **Task:** Find highest marks from an array
- **Status:** ✅ Completed
- **Key Concepts Learned:**
  - Functions and conditionals
  - Loops: for, while, forEach
  - Array methods
- **Enhancements Added:**
  - Added bilingual output for highest marks
- **Notes/Challenges:**
  - Decided folder structure for Phase 1 tasks
  - Managed Git commits and pushes properly


### Progress Log - Day 3

## Task
Simple Student Marks Calculator
## Status
✅ Completed
## Learnings
- Learned how to use arrays and objects together
- Practiced array methods (map, filter, reduce)
- Understood how to calculate total/average marks per student
## Code Reference
File: `phase-1/day-3/day3.js`


### Day 4: Node.js Intro (August 26, 2025)
- **Task**: Built a Node.js server using the `http` module.
- **Features**: Returns "Hello, World!" on GET request to port 3000, with mock bilingual support (English/Hindi) based on URL (/hindi).
- **Tech**: Node.js, `http` module.
- **Relevance**: Foundation for backend API to serve exam questions or user data in the Study Buddy platform, supporting the hackathon’s bilingual requirement.
- **Files**: `phase-1/day-4/day4.js`, `phase-1/day-4/package.json`.


### Day 5: Express.js Basics (August 27, 2025)
- **Task**: Built an Express.js API with GET and POST routes.
- **Features**: GET / returns welcome message. GET /api/students returns student list with names, marks, and grades in JSON (English/Hindi via ?lang=hindi). POST /api/students adds a new student with marks and calculates grade.
- **Tech**: Node.js, Express.js.
- **Relevance**: Supports serving and managing student data for the Study Buddy platform, with bilingual support and score analysis tied to Day 3.
- **Files**: `phase-1/day-5/day5.js`, `phase-1/day-5/package.json`, `phase-1/day-5/package-lock.json`.


### Day 6 (Phase 2): Completed Profile Card Component
- Created React app with Vite
- Built ProfileCard.jsx with bilingual support (English/Hindi)
- Styled with CSS for accessibility
- Tested with sample student data



##
## Samadhan 2.0 Hackathon - Phase 2 Progress
##



### Day 7: Counter + Live Text Preview with Bilingual Support
- **Date**: August 30, 2025
- **Objective**: Build a React component with a counter, live text preview, and bilingual (English/Hindi) support using `useState` for state management.
- **Implementation**:
  - Created `CounterTextPreview.jsx` with `useState` hooks for `count` (counter), `text` (input), and `language` (English/Hindi toggle).
  - Implemented increment/decrement buttons, text input with live preview, and a toggle button for language switching.
  - Used inline CSS for styling (gray background, white card with shadow, green toggle button, blue/red counter buttons) due to Tailwind CSS configuration issues (`Unknown at rule @tailwindcss`).
- **Challenges**:
  - Faced `ENOENT: no such file or directory` for `package.json` and `Missing script: "dev"` errors, resolved by creating `package.json` in `my-counter-app/` with Vite scripts.
  - Encountered `Failed to resolve import "./components/CounterTextPreview"` error, fixed by ensuring `CounterTextPreview.jsx` exists and is correctly imported.
  - Tailwind CSS error (`Unknown at rule @tailwindcss`) prevented styles; switched to inline CSS for a polished UI.
- **Outcome**:
  - Functional component with a responsive UI, meeting all requirements (counter, text preview, bilingual toggle).
  - Ready for submission with PPT and demo video.
- **Future Enhancements**:
  - Integrate AI (e.g., Hugging Face) for study tips based on text input.
  - Add group collaboration features (e.g., shared notes).
  - Resolve Tailwind CSS issues for future tasks.



### Day 8: React + Tailwind To-Do App
- Setup React + Tailwind project
- Built To-Do app UI
- Add tasks (button + Enter key)
- Mark tasks as complete

  ## Learnings
  - Tailwind setup & debugging
  - React event handling
  - Controlled inputs
  - Conditional styling


### Day 9: useEffect & Fetch API
- Explored useEffect basics
- Fetched data from Node backend (Student API from Day 5)
- Built Student Directory (backend + frontend integration)

## Learnings
- Understanding dependency arrays in useEffect
- Using Fetch API to get data from backend
- Rendering dynamic lists in React
- Handling loading states in UI



### Day 10 Styling
A Styled Product Card List for study resources using React and Tailwind CSS.
- Features: Responsive grid, styled cards, "Add to Cart" buttons.
- Next Steps: Add backend integration, bilingual support, and AI features.


###
### Phase 3: Full-Stack Integration
###


### Day 11: Backend CRUD (Completed on September 3, 2025)

**Task**: Build a Student CRUD API using Node.js and Express.js to manage student data, supporting Create, Read, Update, and Delete operations.

**Description**:
- Created an Express.js-based REST API with endpoints:
  - `GET /students`: Retrieve all students.
  - `GET /students/:id`: Retrieve a specific student by ID.
  - `POST /students`: Create a new student with name, email, and marks.
  - `PUT /students/:id`: Update a student’s details (e.g., marks).
  - `DELETE /students/:id`: Delete a student by ID.
- Used an in-memory array to store student data (e.g., `[{ id: 1, name: "John Doe", email: "john@example.com", marks: 85 }, ...]`).
- Addressed an ESM error (`require is not defined`) by updating `index.js` to use ES Modules (`import express from 'express'`) due to `"type": "module"` in `package.json`.
- Tested all endpoints using **Postman** and **curl** to ensure functionality:
  - **GET /students**: Returned the full student list.
  - **GET /students/1**: Returned a single student or 404 for invalid IDs.
  - **POST /students**: Created a new student (e.g., `{"name": "Alice Brown", "email": "alice@example.com", "marks": 95}`) with status 201.
  - **PUT /students/1**: Updated student data (e.g., changed marks to 88) with status 200.
  - **DELETE /students/1**: Deleted a student with status 200, returning a confirmation message.
  - Verified error cases (e.g., missing fields for POST, invalid IDs for GET/PUT/DELETE).
- The API supports the hackathon’s goal of building an AI-powered study platform by providing a backend to manage student data, which can be extended with AI features (e.g., performance predictions) 




### Day 12: React + API To-Do App
  Setup React project with Vite and integrate with Node.js/Express backend
  Built To-Do app UI with initial CSS styling
  Add tasks (button + Enter key support added)
  Mark tasks as complete (pending implementation)
  Centered UI layout using flexbox and improved styling

## Added backend root endpoint message ("Please use /api/tasks")
# Learnings

  React setup and integration with backend APIs using Axios
  Event handling for Enter key press
  Controlled inputs for task addition
  Basic CSS flexbox for layout centering
  Debugging API communication and UI placement issues
  (Suggested) Tailwind CSS setup and utility-based styling (to be implemented)


### Progress Log - Day 13

## Task
Notes App (Full-Stack CRUD with Database Integration)
## Status
✅ Completed
## Learnings
- Learned to connect Express.js with MongoDB for data storage and retrieval
- Practiced CRUD operations (Create, Read, Update, Delete) using Mongoose
- Understood how to handle API requests and responses with async/await
- Explored frontend-backend integration with React and Axios
- Gained experience troubleshooting MongoDB connection errors (e.g., ECONNREFUSED)
- Implemented bilingual support (English/Hindi) and basic AI summarization with Hugging Face
## Code Reference
- File: `index.js` (Backend server setup)
- File: `models/Note.js` (Note schema definition)
- File: `routes/notes.js` (CRUD API routes)
- File: `src/App.js` (React frontend with CRUD features)