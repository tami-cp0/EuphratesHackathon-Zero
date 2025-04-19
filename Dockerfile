# Build dependencies
FROM node:16-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --production --no-cache

FROM node:16-alpine
ENV NODE_ENV=production
WORKDIR /home/node/app

# Create non-root user and set ownership first
RUN adduser -D node && \
    chown -R node:node /home/node/app

# Copy node_modules from builder
COPY --from=builder --chown=node:node /usr/src/app/node_modules ./node_modules

# Copy application files
COPY --chown=node:node . .

# Switch to non-root user
USER node

EXPOSE 4000
CMD ["node", "server.js"]
