# Use the official Node.js 14 image as the base image
FROM node:latest

# Set the working directory inside the container
# This directory will be created for you if it does not exist
WORKDIR /app

# Copy files to working dir
COPY . .

# Install dependencies
RUN npm install

# Export the port on which the application will run
EXPOSE 3000

# Script to start the application
CMD [ "npm" , "start" ]