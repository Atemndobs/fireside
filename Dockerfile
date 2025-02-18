FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build:web

FROM nginx:alpine

COPY --from=builder /app/web-build /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5050

CMD ["nginx", "-g", "daemon off;"]