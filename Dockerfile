FROM node:18

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies and a simple static file server
RUN npm install
RUN npm install -g serve

# Copy the rest of the code
COPY . .

# Build the web version
RUN npx expo export --platform web

EXPOSE 5050

# Serve the static files using 'serve'
CMD ["serve", "-s", "web-build", "-l", "5050"]
