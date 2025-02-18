FROM node:18 AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies and expo-cli globally
RUN npm install
RUN npm install -g expo-cli

# Copy the rest of the code
COPY . .

# Build the web version
RUN npm run build:web

FROM nginx:alpine

COPY --from=builder /app/web-build /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5050

CMD ["nginx", "-g", "daemon off;"]
