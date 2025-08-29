# Kasey Doan Portfolio Website

A full-stack personal portfolio website built with React, TypeScript, and Express.js.

## 🚀 Features

- **Modern React Frontend**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Interactive UI**: Smooth animations with Framer Motion
- **Contact Form**: Functional contact form with validation
- **Professional Layout**: Sections for experience, skills, projects, and personal information
- **Type Safety**: Full TypeScript implementation across frontend and backend

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Framer Motion** for animations
- **React Hook Form** with Zod validation
- **TanStack React Query** for server state management
- **Wouter** for client-side routing

### Backend
- **Express.js** with TypeScript
- **Drizzle ORM** for database operations
- **In-memory storage** (development) / PostgreSQL (production ready)
- **RESTful API** design

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd kaseydoanresume
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Copy the example environment file and configure it:
```bash
cp env.example .env
```

Edit `.env` file with your configuration:
```env
PORT=5000
NODE_ENV=development
# DATABASE_URL=postgresql://username:password@localhost:5432/database_name
```

### 4. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 📁 Project Structure

```
kaseydoanresume/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/         # Page components
│   │   ├── data/          # Static data and types
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   └── contexts/      # React contexts
│   └── index.html         # HTML template
├── server/                # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage layer
│   └── vite.ts            # Vite integration
├── shared/                # Shared code between frontend and backend
│   └── schema.ts          # Database schemas and types
├── attached_assets/       # Static assets (images, documents)
└── migrations/            # Database migrations (if using PostgreSQL)
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run check` - Type check the codebase
- `npm run db:push` - Push database schema changes (if using PostgreSQL)

## 🗄️ Database Configuration

The application currently uses **in-memory storage** for development, which means:
- No database setup required for local development
- Data is reset when the server restarts
- Perfect for development and testing

For production deployment with PostgreSQL:
1. Set up a PostgreSQL database
2. Configure `DATABASE_URL` in your environment variables
3. Run `npm run db:push` to apply database schema

## 🎨 Customization

### Styling
- Modify `client/src/index.css` for global styles
- Update Tailwind configuration in `tailwind.config.ts`
- Customize component styles in individual component files

### Content
- Update personal information in `client/src/data/profile-data.ts`
- Modify components in `client/src/components/`
- Add new pages in `client/src/pages/`

### Backend
- Add new API routes in `server/routes.ts`
- Modify data storage in `server/storage.ts`
- Update database schema in `shared/schema.ts`

## 🚀 Deployment

### Production Build
```bash
npm run build
npm run start
```

### Environment Variables for Production
```env
NODE_ENV=production
PORT=5000
DATABASE_URL=your_production_database_url
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 📞 Contact

For questions or support, please reach out through the contact form on the website or create an issue in the repository. 