# SynthesiaCanvas 2.0 - Frontend

Modern React.js frontend for the SynthesiaCanvas AI Agent Design Platform.

## 🎨 Features

- **Dashboard** - Real-time statistics and performance metrics
- **Projects** - Manage AI agent projects
- **Agents** - Browse and configure AI agents by category
- **Workflows** - Visual workflow builder with React Flow
- **Executions** - Monitor workflow execution history
- **Code Generation** - Export workflows as Python wheel files
- **Settings** - Team and platform configuration

## 🛠️ Tech Stack

- **React 18.2** - UI framework
- **TypeScript 5** - Type safety
- **Material-UI 5** - Component library
- **React Router 6** - Navigation
- **Recharts 2** - Data visualization
- **Vite 5** - Build tool
- **React Flow 11** - Workflow canvas (planned)

## 🚀 Quick Start

### Install Dependencies

```powershell
cd frontend
npm install
```

### Run Development Server

```powershell
npm run dev
```

The app will be available at http://localhost:5173

### Build for Production

```powershell
npm run build
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   │   ├── Dashboard.tsx
│   │   ├── Projects.tsx
│   │   ├── Agents.tsx
│   │   ├── Workflows.tsx
│   │   ├── WorkflowBuilder.tsx
│   │   ├── Executions.tsx
│   │   ├── CodeGeneration.tsx
│   │   └── Settings.tsx
│   ├── layouts/        # Layout components
│   │   └── MainLayout.tsx
│   ├── types/          # TypeScript type definitions
│   ├── data/           # Mock data for prototype
│   ├── services/       # API services
│   ├── store/          # Redux store (planned)
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Utility functions
│   ├── theme.ts        # Material-UI theme
│   ├── App.tsx         # Root component
│   └── main.tsx        # Entry point
├── public/             # Static assets
├── package.json
├── tsconfig.json
├── vite.config.ts
└── index.html
```

## 🎯 Current Status

### ✅ Completed
- Project scaffolding with Vite + React + TypeScript
- Material-UI theme configuration
- Main layout with sidebar navigation
- Dashboard with charts and statistics
- Projects page with card grid
- Agents page with category filtering
- Workflows page
- Executions table view
- Code Generation page
- Settings page
- Mock data for all entities
- Responsive design
- Type-safe architecture

### 🚧 In Progress
- None (prototype complete)

### 📋 Todo
- Connect to FastAPI backend
- Implement React Flow workflow builder
- Add Redux state management
- Implement authentication flow
- Add form validation
- Create agent creation/edit forms
- Add real-time WebSocket updates
- Implement code editor (Monaco)
- Add unit tests with Jest
- E2E tests with Cypress

## 🎨 Design System

### Colors
- **Primary**: Indigo (#6366f1)
- **Secondary**: Pink (#ec4899)
- **Success**: Green (#10b981)
- **Warning**: Amber (#f59e0b)
- **Error**: Red (#ef4444)
- **Info**: Blue (#3b82f6)

### Typography
- **Font Family**: Inter, Roboto, Helvetica, Arial
- **Headings**: 700 weight (Bold)
- **Body**: 500 weight (Medium)

### Spacing
- **Base Unit**: 8px
- **Border Radius**: 8px (buttons), 12px (cards)

## 🔗 API Integration

The frontend is configured to proxy API requests to the FastAPI backend at `http://localhost:8000`.

See `vite.config.ts` for proxy configuration.

## 📝 Notes

- This is currently a **mockup prototype** with dummy data
- All pages are functional with navigation
- Charts and statistics use mock data from `src/data/mockData.ts`
- Ready for backend integration once FastAPI is deployed

## 👨‍💻 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- Use TypeScript for all new files
- Follow React functional component patterns
- Use Material-UI `sx` prop for styling
- Keep components small and focused
- Use custom hooks for shared logic

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Test locally
4. Submit pull request

---

**Version**: 2.0.0  
**Status**: Prototype Complete ✅
