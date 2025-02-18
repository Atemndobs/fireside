FROM node:18

WORKDIR /app

# Copy package files
COPY package*.json ./

# Clean install like in dev
RUN rm -rf node_modules package-lock.json
RUN npm cache clean --force
RUN npm install

# Copy the rest of the code
COPY . .

# Build the web version
RUN npx expo export --platform web

EXPOSE 5050

# Use Node's built-in http-server module
CMD ["node", "-e", "require('http').createServer((req, res) => require('fs').createReadStream('web-build' + (req.url === '/' ? '/index.html' : req.url)).on('error', () => { res.statusCode = 404; res.end('Not found'); }).pipe(res)).listen(5050)"]
