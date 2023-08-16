import { decompress } from 'brotli-compress'
import { Buffer } from 'buffer'
const express = require('express');
const bodyParser = require('body-parser');


const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// POST route to receive and modify HTML content
app.post('/modify-html', (req, res) => {
  try {
    const { compressedHTML } = req.body;
    // console.log(req.body);
    // console.log(compressedHTML);
    // const decompressedBuffer = decompress(Buffer.from(compressedHTML, 'base64'));

    // // // Process the decompressed HTML (you can modify this part)
    // const processedHtml = decompressedBuffer.toString('utf-8');

    // // console.log("processed HTML", processedHtml);
    // console.log(processedHtml);


    // Send back the modified HTML content as a response
    res.status(200).send("the html Content don start here");
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred.');
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
