// index.js
const express = require('express');
const axios = require('axios');
const purgecss = require('purgecss');

const app = express();
const port = 3000;

app.use(express.json());

// API endpoint to process HTML and CSS
app.post('/process', async (req, res) => {
  try {
    const { html, css } = req.body;

    // Initialize PurgeCSS
    const result = await purgecss({
      content: [{ raw: html }],
      css: [{ raw: css }],
    });

    // Extract used CSS rules
    const usedCss = result[0].css;

    res.json({ usedCss });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
