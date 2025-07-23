# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# smart-goal-app
# 💰 SMART GOAL PLANNER

A simple yet powerful financial planning tool built with React and JSON Server. This application lets users create, manage, and track multiple savings goals—perfect for organizing finances and hitting targets one step at a time.

---

## 🚀 Project Overview

You're working with a fintech company to build a **Smart Goal Planner**. The goal is to help users:

- Create and manage multiple savings goals
- Allocate deposits to specific goals
- Track financial progress visually and effectively

---

## 🧠 Core Features

### 1. 📁 Data Management & Persistence (via `db.json` & JSON Server)
- All goal data is stored in a `db.json` file.
- JSON Server exposes RESTful endpoints like `http://localhost:3000/goals`.
- Data is fetched at app load (GET), created (POST), updated (PATCH/PUT), and deleted (DELETE).

---

### 2. 🎯 Multiple Savings Goals (CRUD)
Users can:
- ✅ **Create** new goals (e.g. “Travel Fund”)
- ✏️ **Update** goal details (name, target amount, deadline, etc.)
- ❌ **Delete** any goal
- 💾 Changes persist to `db.json` via HTTP requests

Goal attributes include:
- `name`
- `targetAmount`
- `savedAmount`
- `category`
- `deadline`
- `createdAt`

---

### 3. 📊 Progress Tracking
Each goal displays:
- ✅ Total saved vs. target
- ⏳ Remaining amount
- 📈 Visual progress bar
- ⚠️ Deadline warnings (30 days left)
- ❌ Overdue status if deadline passed and goal isn’t met

---

### 4. 💸 Deposit to Goals
Users can:
- Add deposits to a specific goal
- Backend updates `savedAmount` via PATCH
- UI updates progress bars instantly

---

### 5. 📋 Goal Overview
Dashboard displays:
- Total number of goals
- Total saved across all goals
- Number of completed goals
- Time remaining per goal
- Warnings for urgent deadlines
- Overdue labels for missed deadlines

---

## 🧱 `db.json` Structure Example

```json
{
  "goals": [
    {
      "id": "1",
      "name": "Travel Fund - Japan",
      "targetAmount": 5000,
      "savedAmount": 3200,
      "category": "Travel",
      "deadline": "2025-12-31",
      "createdAt": "2024-01-15"
    },
    ...
  ]
}
