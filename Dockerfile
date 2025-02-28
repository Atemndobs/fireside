FROM node:18

WORKDIR /app

# Copy package files
COPY package*.json ./

# Clean install like in dev
RUN rm -rf node_modules package-lock.json
RUN npm cache clean --force
RUN npm install

RUN cat package.json

# Copy the rest of the code
COPY . .

# Build the web version
RUN npx expo export -p web

RUN ls -l

EXPOSE 80

# Install serve
RUN npm install -g serve

# Serve the dist directory
CMD ["serve", "-s", "dist"]
