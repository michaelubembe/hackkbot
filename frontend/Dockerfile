# Use the official Node.js  LTS image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port Next.js is running on (default is 3000)
EXPOSE 3000

# Start the application in development mode
CMD ["npm", "run", "dev"]