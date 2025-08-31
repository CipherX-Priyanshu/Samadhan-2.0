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