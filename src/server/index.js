const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/headers', async (req, res) => {
    const headers = await axios.get("https://evoteam-verasoft.github.io/data/summary.json");
    return res.status(200).json(headers.data);
});

app.get('/api/orders', async (req, res) => {
  const orders = await axios.get("https://evoteam-verasoft.github.io/data/orders.json");
  return res.status(200).json(orders.data);
});

app.use(express.static('build'));

app.use("*", (req, res) => {
  res.send('Route not found!!');
})
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));