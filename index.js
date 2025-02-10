import express from 'express';
import mainRoutes from './routes/mainRoutes.js'; // Import the routes

const app = express();
const port = 3000;

// Use the router
app.use('/', mainRoutes);  // Use the router for all requests starting with '/'

// If you want to add other middlewares, add them before the routes, for example:
app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
