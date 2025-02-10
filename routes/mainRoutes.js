import express from 'express';

const router = express.Router();

// Home route
router.get('/home', (req, res) => {
  res.send('Welcome to the Homepage!');
});

// About route
router.get('/about', (req, res) => {
  res.send('This is the About Page');
});

// Contact route
router.get('/contact', (req, res) => {
  res.send('This is the Contact Page');
});

export default router;
