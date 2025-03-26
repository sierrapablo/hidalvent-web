```
src/
├── assets/                # Static assets (images, fonts)
│   ├── fonts/
│   ├── images/
│
├── components/            # UI Components (Atomic Design)
│   ├── atoms/             # Smallest reusable components (Button, Input, Label)
│   ├── molecules/         # Grouped atoms forming functional components
│   ├── organisms/         # Complex UI structures combining molecules
│   ├── templates/         # Page layouts (AuthLayout, DashboardLayout)
│
├── lib/                   # Business logic and utilities
│   ├── constants/         # Global constants
│   ├── helpers/           # Utility functions
│   ├── hooks/             # Custom reusable hooks
│   ├── store/             # State management (Redux/Zustand)
│   ├── types/types.ts   # Shared TypeScript types and interfaces
│
├── pages/                 # Page components (LoginPage, DashboardPage)
│        ├── App.jsx       # Main app entry point
├── routes/                # Centralized app routing
│   ├── routes.jsx
│
├── services/              # API services (fetching data)
│   ├── products/          # Product API services
│   │   ├── queries.js # React Query fetching
|   |   ├── keys.js # Query keys
│   │   ├── mutations.js   # React Query mutations
│   │   ├── api.js         # API functions
│
├── styles/                # Global styles (CSS Modules, Tailwind, etc.)
│   ├── globals.css
│
├── main.jsx              # React root file
├── .env.local             # Environment variables
├── .gitignore
├── package.json
```
