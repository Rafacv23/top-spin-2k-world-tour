# 🎾 Top Spin 2K World Tour

A full-stack tennis tournament manager and leaderboard app, built with modern technologies. Track players, view tournaments, check match results by round and set, and sync events with your calendar.

## ✨ Features

- 📅 View upcoming and past tournaments by year
- 🏅 Track player rankings and points dynamically
- 🎾 Browse match results grouped by tournament round and individual sets
- 🧑‍💼 Player registration with Discord and 2K ID
- 🗓️ Sync tournaments to Google, Apple, Outlook, iCal, Yahoo & Notion calendars
- 📱 Fully responsive UI with smooth UX

## 🔧 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) (App Router), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend**: [Prisma](https://www.prisma.io/) ORM, [PostgreSQL](https://www.postgresql.org/) via [Supabase](https://supabase.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📸 Screenshots

<insert screenshots here if available>

## 🗂️ Project Structure

```
.
├── prisma/             # Prisma schema and migrations
├── app/                # Next.js app directory
├── components/         # UI and layout components
├── lib/                # Utilities and reusable functions
├── public/             # Static files
├── styles/             # Tailwind styles
└── .env                # Environment variables
```

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/rafacv23/top-spin-2k-world-tour.git
cd top-spin-2k-world-tour
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up the environment

Create a `.env` file based on `.env.example`:

```env
DATABASE_URL=your_supabase_postgres_url
```

### 4. Push schema to your database

```bash
npx prisma db push
```

Or if using migrations:

```bash
npx prisma migrate dev --name init
```

### 5. Run the development server

```bash
npm run dev
```

Now visit `http://localhost:3000`.

## 🛠 Development Notes

- Prisma client is generated based on the schema.
- All tournament matches include their respective sets using Prisma's `include`.
- Dates are formatted with `date-fns`.
- Tournament rounds are grouped and displayed with tabs using `shadcn/ui`.

## 🧪 TODO

- Player profiles
- Admin dashboard for match results
- Better i18n support
- Match history and stats per player

## 📬 Contributing

Pull requests and ideas are welcome! If you find bugs or want to improve a feature, feel free to open an issue.

## 📄 License

MIT License © [Rafa Canosa](https://github.com/rafacv23)
