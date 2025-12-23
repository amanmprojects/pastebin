FROM oven/bun:1.3.4-alpine

WORKDIR /app

# Copy lockfile first for better caching
COPY bun.lock package.json ./
RUN bun install --frozen-lockfile

# Copy rest of app
COPY . .

# Generate Prisma client
RUN bunx prisma generate

# Build Next.js
RUN bun run build

EXPOSE 3000

CMD ["bun", "run", "start"]
