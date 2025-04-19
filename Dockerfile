After #Build dependencies....


FROM node:16-alpine
ENV NODE_ENV=production
WORKDIR /home/node/app

# Set ownership using the existing 'node' user
RUN chown -R node:node /home/node/app

# Copy node_modules from builder
COPY --from=builder --chown=node:node /usr/src/app/node_modules ./node_modules

# Copy application files
COPY --chown=node:node . .

USER node
EXPOSE 4000
CMD ["node", "server.js"]