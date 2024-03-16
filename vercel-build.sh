#!/bin/sh

# Install Prisma CLI globally
npm install -g prisma

# Generate the Prisma Client
npx prisma generate

# Build the Next.js app
npm run build