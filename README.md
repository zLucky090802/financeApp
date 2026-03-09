# 💰 Finance App

A mobile personal finance application built with **Ionic + Angular 19**, designed to help users track income and expenses, manage multiple accounts, and visualize spending through interactive charts. UI/UX designed in Figma and implemented with Capacitor for Android deployment.

---

## 📱 Screenshots

> UI designed in Figma — [view mockups](https://github.com/your-username/financeApp-mocks)

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Ionic 8 + Angular 19 |
| Language | TypeScript |
| State Management | NgRx (Store, Effects, DevTools) |
| Charts | Chart.js 4 |
| Mobile | Capacitor 7 (Android) |
| Styling | SCSS + Ionic components |
| Auth | JWT via REST API + NgRx auth state |
| Alerts | SweetAlert2 |
| Storage | ngrx-store-localstorage |

---

## ✨ Features

- **Authentication** — login and register with JWT, protected routes via guards
- **Dashboard** — available balance and recent transactions at a glance
- **Transaction management** — add income and expense movements with categories
- **Statistics** — bar chart with period filters (Year / Month / Week) powered by Chart.js
- **Account management** — create and manage multiple accounts (cash, credit, loans)
- **Category management** — custom income and expense categories
- **Empty state handling** — illustrated prompts guiding new users
- **Bottom navigation** — tab bar with Home, Stats, Journal, Accounts, and More
- **Persistent auth state** — session stored locally via ngrx-store-localstorage
- **Android ready** — Capacitor integration for native Android builds

---

## 📁 Project Structure

```
src/app/
├── auth/               # Login, register, auth service, JWT interfaces
├── finance/            # Home, accounts, movements, categories pages
├── statistics/         # Charts and movements history
├── add/                # Forms for transactions, accounts, categories
├── store/              # NgRx store — auth actions, effects, reducers, selectors
├── shared/             # Bottom bar, movements service, shared interfaces
└── guards/             # Auth guard, login guard
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js `>= 18`
- Angular CLI `>= 19`
- Ionic CLI

```bash
npm install -g @angular/cli @ionic/cli
```

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/financeApp.git

# Navigate to the project
cd financeApp

# Install dependencies
npm install

# Start development server
ionic serve
```

Open your browser at `http://localhost:8100`

### Environment setup

Update `src/environments/environment.ts` with your API base URL:

```typescript
export const environment = {
  production: false,
  apiUrl: 'https://your-api-url.com'
};
```

---

## 📦 Android Build

```bash
# Build the project
ionic build

# Sync with Capacitor
npx cap sync android

# Open in Android Studio
npx cap open android
```

---

## 🔐 Auth Flow

1. User registers or logs in via REST API
2. JWT token stored in NgRx store + localStorage
3. `AuthGuard` protects all finance routes
4. `LoginGuard` redirects authenticated users away from login/register

---

## 📄 License

MIT — feel free to use this as a base for your own finance app.

---

> Built by [Daniel Espitia](mailto:d.espitia15@gmail.com) · Colombia
