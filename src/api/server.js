const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());  // Enable CORS for all routes

const dirname = path.resolve(); // Get the current directory name
const filePath = path.join(dirname, 'faker.json');

// POST route to add a new user
app.post('/api/addUser', (req, res) => {
  const newUser = req.body;

  // Basic validation
  if (!newUser.firstName || !newUser.lastName || !newUser.email || !newUser.password || !newUser.phoneNumber) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Read the existing data from faker.json
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading data' });
    }

    // Handle the case where the file is empty
    let jsonData = { users: [] };
    if (data.trim().length > 0) {
      try {
        jsonData = JSON.parse(data);
      } catch (parseError) {
        return res.status(500).json({ error: 'Error parsing JSON data' });
      }
    }

    newUser.id = jsonData.users.length + 1; // Assign a new ID
    jsonData.users.push(newUser); // Add the new user

    // Write the updated data back to faker.json
    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error writing data' });
      }
      res.status(200).json({ message: 'User added successfully!' });
    });
  });
});

app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
