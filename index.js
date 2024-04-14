const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const diaryEntryRoutes = require('./routes/diaryEntryRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/entries', diaryEntryRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
