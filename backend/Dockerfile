FROM node:22

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Install the Nest CLI globally for development purposes
# RUN npm install -g @nestjs/cli

# Install nodemon globally
RUN npm install -g nodemon

# Expose the application port
EXPOSE 3000

# Define the command to run the application in development mode
CMD ["nodemon", "--legacy-watch", "--config", "nodemon.json"]
