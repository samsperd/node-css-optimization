const express = require('express');
const bodyParser = require('body-parser');
const cheerio = require('cheerio')
var uncss = require('uncss');
var CleanCSS = require('clean-css');



const app = express();

app.use(bodyParser.json({ limit: '50mb' }));



// POST route to receive and modify HTML content
app.post('/modify-html', async (req, res) => {
  try {
    const { serializedXML, styleContent } = req.body;

    // Convert the serialized XML back to an HTML document
    const clonedDocument = cheerio.load(serializedXML).html()

    var options = {
      raw: styleContent,
  };

  
    uncss(clonedDocument, options, function (error, output) {
      var minifiedCSS = new CleanCSS().minify(output);

      res.status(200).send(minifiedCSS);
    });
  

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
