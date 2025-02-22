# User Management App

This is a simple user management application built with Next.js, TypeScript, and Prisma. It allows users to add new users and view a list of existing users with a theme toggle feature.

## Features
- Add new users with name and email
- View a list of users stored in a database
- Toggle between light and dark themes
- Uses Next.js Server Actions with Prisma for database operations

## Technologies Used
- **Next.js** – React framework for server-side rendering and static site generation
- **TypeScript** – Strongly typed JavaScript for better development experience
- **Prisma** – ORM for managing database interactions
- **ShadCN UI** – Pre-styled UI components
- **Lucide React** – Icon library

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/darkwaves-ofc/nextjs-prisma-example.git
   ```
2. Navigate to the project folder:
   ```sh
   cd nextjs-prisma-example
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up your database (ensure you have Prisma configured):
   ```sh
   npx prisma generate
   ```
5. Run the development server:
   ```sh
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
📦 nextjs-prisma-example
├── 📂 components
│   ├── ui
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── table.tsx
├── 📂 action
│   ├── users.ts (createUser & getUsers functions)
├── 📂 lib
│   ├── prisma.ts (Prisma client setup)
├── 📜 page.tsx (Main user management page)
├── 📜 README.md (Documentation)
├── 📜 package.json
├── 📜 tailwind.config.js
├── 📜 .env (DATABASE_URL include and place that value as in the video)
└── 📜 tsconfig.json

```

## Screenshots
![image](https://github.com/darkwaves-ofc/nextjs-prisma-example/blob/16008bf2b9037c6a62f26fafe3221b654969eb01/screenshot/screenshot.png)

## Demo Video
[![Watch the video](https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg)](https://www.youtube.com/watch?v=YOUR_VIDEO_ID)

## License
This project is licensed under the MIT License.

