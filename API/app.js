const express = require('express');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(express.json());
app.use('/api/tasks', taskRoutes);
app.use('/api/categories', categoryRoutes);

app.get('/', (req, res) => {
    res.send('Task Management API');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
