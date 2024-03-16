@echo off

:: Install Prisma CLI globally
call npm install -g prisma

:: Generate the Prisma Client
call npx prisma generate

:: Build the Next.js app
call npm run build