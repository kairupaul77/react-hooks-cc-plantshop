# Plant Store App

This is a React-based plant store application with a backend API powered by JSON Server. The app allows users to view a list of plants, mark plants as sold out, search for plants by name. The backend is mocked using JSON Server, and the app is designed to be deployed on platforms like Netlify for the frontend and Render or Heroku for the backend.

## Features

### Core Features
- **View All Plants**: Displays all available plants on the homepage.
- **Mark as Sold Out**: Users can mark a plant as "sold out."
- **Search Plants**: Users can search for plants by their name.


## Technologies Used

- **React**: Frontend framework for building the user interface.
- **JSON Server**: Mock backend server for simulating an API (used for development and testing).
- **CSS**: For styling the components (you can add your own styling or use a CSS framework like Bootstrap).
- **Netlify**: For deploying the React frontend.
- **Render/Heroku**: For deploying the backend API.

## Installation

Follow these steps to get the app running on your local machine.

### 1. Clone the repository


git clone https://github.com/your-username/plant-store-app.git
cd plant-store-app
2. Install dependencies
Run the following command to install both frontend and backend dependencies:


Copy code
npm install
3. Set up the backend (JSON Server)
For development, you'll need to run the JSON Server mock API.

Create a db.json file in your root directory  and add your plant data to it.

Run the backend server on port 6001:


Copy code
npm run server
This will start the backend API, and it will be available at http://localhost:6001.

4. Start the React frontend
To start the React development server:


Copy code
npm start
The frontend will be available at http://localhost:3000.

Usage
Viewing Plants
When you load the app, you will see a list of all plants fetched from the backend. Each plant displays:

The name of the plant
The plant image
The price of the plant
Adding a New Plant
Click the "Add Plant" button to show the form. Fill in the plant name, image URL, and price, then click "Add Plant" to submit it. The new plant will be added to the list, and the form will reset.

Marking a Plant as Sold Out
For each plant, you will see a "Mark as Sold Out" button. Clicking it will mark the plant as sold out (the status can be tracked by toggling the plant's availability).

Deleting a Plant
Each plant also has a "Delete" button. Clicking this will remove the plant from the backend and update the plant list.

Searching for a Plant
Use the search bar to filter plants by their name. As you type, the list of plants will automatically update to show only those that match the search query.

Deployment
Frontend Deployment (React App)
Build the app for production:


Copy code
npm run build
Deploy on Netlify:

Go to Netlify, sign up/login, and click New Site from Git.
Connect your GitHub repository.
Configure the build settings:
Build Command: npm run build
Publish Directory: build
Click Deploy.
Once deployed, Netlify will provide a URL (e.g., https://your-site-name.netlify.app) where the React app will be live.

Backend Deployment (JSON Server)
You can deploy your JSON Server backend using platforms like Render or Heroku.

Using Render:
Push your backend code to GitHub.
Create a new web service on Render.
Connect your GitHub repository.
Set the start command for Render to: json-server --watch db.json --port $PORT.
Deploy your service.
Using Heroku:
Push your backend code to GitHub (if not already done).
Create a new app on Heroku.
Connect your GitHub repository.
Set the start command in the Heroku dashboard to: json-server --watch db.json --port $PORT.
Deploy the app.
Once deployed, your backend will be live at a URL like https://your-backend.herokuapp.com or https://your-backend.onrender.com.

Update the Frontend API URL
After deploying both the frontend and backend, update the API URL in your React app to point to your live backend URL.



javascript
Copy code
fetch('http://localhost:6001/plants')
with:

javascript
Copy code
fetch('https://your-backend.onrender.com/plants') // Or your Heroku backend URL
Contributing
Fork the repository.
Clone your fork to your local machine.
Make changes and commit them.
Push your changes to your forked repository.
Create a pull request to contribute your changes

