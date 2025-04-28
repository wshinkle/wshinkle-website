# Use a Node.js image to build the application
FROM node:18 AS build

# Set working directory
WORKDIR /home/node/app

# Copy the files over
COPY . ./

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
