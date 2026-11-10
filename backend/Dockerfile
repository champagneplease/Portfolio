# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

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

# Install openssl for Prisma runtime
RUN apk add --no-cache openssl

# Create non-root user for security
USER node

# Copy package files and install only production dependencies
COPY --chown=node:node package*.json ./
COPY --chown=node:node prisma ./prisma/

RUN npm ci --omit=dev && npx prisma generate

# Copy built application from builder
COPY --chown=node:node --from=builder /app/dist ./dist

EXPOSE 4000

CMD ["node", "dist/src/main.js"]

