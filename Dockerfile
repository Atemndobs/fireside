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
RUN npm run build:web

EXPOSE 5050
EXPOSE 80

# Use Node's built-in http-server module
CMD ["node", "-e", "require('http').createServer((req, res) => require('fs').createReadStream('out' + (req.url === '/' ? '/index.html' : req.url)).on('error', () => { res.statusCode = 404; res.end('Not found'); }).pipe(res)).listen(5050)"]

COPY public/manifest.json ./public/manifest.json
