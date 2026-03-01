# ---- Stage 1: Install dependencies ----
FROM node:22-alpine AS deps
WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

# ---- Stage 2: Production image ----
FROM node:22-alpine AS runner
WORKDIR /app

# Copy installed dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy source code
COPY . .

EXPOSE 5000

# Use node directly (not nodemon) in production
CMD ["node", "server.js"]
