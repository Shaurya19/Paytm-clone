// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());


// Use routes
app.use('/api/v1', rootRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server ready on port ${PORT}.`);
});
