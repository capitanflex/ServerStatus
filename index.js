import express from 'express';
import cors from 'cors';
import gameComments from './routes/comments.routes.js';
import gamestatusRoutes from './routes/gamestatus.routes.js';
import {closeValCrone, startValCrone} from "./crone_tasks/getInfoVal_crone.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:8080' }));

app.use('/api', gameComments);
app.use('/api', gamestatusRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the application.' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);

    startValCrone();
});

app.on('close', () => {
    closeValCrone();
});


