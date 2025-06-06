#  Prime Checker API
A simple Node.js REST API that checks whether a given number is prime.

##  Features
- Accepts a number via query parameter
- Returns whether the number is prime
- Clean and modular code structure
- Basic error handling
- Lightweight and easy to run locally

## 📂 Project Structure
prime-checker-api/
├── index.js               # Main entry point
├── utils/
│   └── isPrime.js         # Prime checking logic
├── package.json
├── .gitignore
└── README.md

## ⚙️ Setup & Run Locally

1. Clone the repository
using git clone or simply download it 

2. Install dependencies
npm install

3. Start the server
npm run dev

Server will start on:
http://localhost:5000

## 🧪 API Usage

Endpoint:
GET /is-prime?number=<your_number>

Example:

Request:
GET http://localhost:5000/is-prime?number=7

Response:
{
  "number": 7,
  "isPrime": true
}

## ❌ Error Handling

Missing query param:
{ "error": "Missing \"number\" query parameter." }

Invalid input:
{ "error": "\"number\" must be a valid integer." }

