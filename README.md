# Book Library — Full Stack Web Application

A full-stack book library application built with:
- **Frontend**: React + Vite
- **Backend**: Node.js + Express
- **Database**: MongoDB + Mongoose

## Features
- Browse all books stored in MongoDB
- View individual book details
- Add new books via a form
- Delete books from the database

## Setup Instructions

### Prerequisites
- Node.js v18 or higher
- A MongoDB Atlas account

### Installation
```bash
# 1. Clone the repository
git clone https://github.com/yourusername/book-library.git
cd book-library

# 2. Install server dependencies
cd server
npm install

# 3. Install client dependencies
cd ../client
npm install

# 4. Configure environment variables
cd ../server
cp .env.example .env
# Edit .env and add your MongoDB connection string

# 5. Start the server
node index.js

# 6. In a new terminal, start the client
cd client
npm run dev
```

## Lab Context
This project was developed across Labs 9–12 of SWS 215 Web Development.
