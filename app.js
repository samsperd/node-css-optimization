const express = require('express');
const bodyParser = require('body-parser');
const { decompress } = require('brotli-compress')
const { Buffer } = require('buffer')


const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json({ limit: '10mb' }));

// POST route to receive and modify HTML content
app.post('/modify-html', async (req, res) => {
  try {
    const { compressedHTML } = req.body;
    // console.log(req.body);
    // Convert the serialized XML back to an HTML document
const parser = new DOMParser();
const doc = parser.parseFromString(compressedHTML, 'text/html');
console.log(doc);
    // const decompressedBuffer = await decompress(Buffer.from(compressedHTML, 'base64'));

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
