# Use a Node.js image to build the application
FROM node:18 AS build

# Set working directory
WORKDIR /home/node/app

RUN apt-get update && apt-get install -y git && rm -rf /var/lib/apt/lists/*

# Clone repo and install dependencies
RUN git clone https://github.com/wshinkle/wshinkle-website.git .
RUN npm install

# Build the application
RUN npm run build

# Use Nginx to serve the built files
FROM nginx:alpine

# Copy the built files to the Nginx HTML directory
COPY --from=build /home/node/app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]