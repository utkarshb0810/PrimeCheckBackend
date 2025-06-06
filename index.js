const express = require("express");
const isPrime = require("./utils/isPrime");

const app = express();
const PORT = 5000;

app.get("/is-prime", (req, res) => {
  const numberParam = req.query.number;

  // Check if number is provided
  if (!numberParam) {
    return res.status(400).json({ error: 'Missing "number" query parameter.' });
  }

  const num = parseInt(numberParam, 10);

  // Check if it's a valid number
  if (isNaN(num)) {
    return res.status(400).json({ error: '"number" must be a valid integer.' });
  }

  const result = isPrime(num);
  res.json({ number: num, isPrime: result });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
