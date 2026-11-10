# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

# Placeholder for build-time prisma generate (overridden by Railway at runtime)
ENV DATABASE_URL="postgresql://placeholder:placeholder@localhost:5432/placeholder"

# Install dependencies needed for build
COPY package*.json ./
COPY prisma ./prisma/

RUN npm ci

# Copy source code and build
COPY tsconfig*.json ./
COPY nest-cli.json ./
COPY src ./src

RUN npx prisma generate
RUN npm run build

# Stage 2: Production Runner
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=4000
# Default fallback for build-time prisma generate (overridden by Railway at runtime)
ENV DATABASE_URL="postgresql://placeholder:placeholder@localhost:5432/placeholder"

# Install openssl for Prisma runtime
RUN apk add --no-cache openssl

# Ensure non-root node user owns /app to allow creating node_modules
RUN chown -R node:node /app

# Create non-root user for security
USER node

# Copy package files and install only production dependencies
COPY --chown=node:node package*.json ./
COPY --chown=node:node prisma ./prisma/

RUN npm ci --omit=dev && npx prisma generate

# Copy built application from builder
COPY --chown=node:node --from=builder /app/dist ./dist

EXPOSE 4000

CMD ["sh", "-c", "npx prisma migrate deploy || true; node dist/src/main.js"]

