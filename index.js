import express from 'express';
import cors from 'cors';
import gameComments from './routes/comments.routes.js';
import gamestatusRoutes from './routes/gamestatus.routes.js';
import {closeValCrone, startValCrone} from "./crone_tasks/getInfoVal_crone.js";

const app = express();
const allowedOrigins = [
    'http://localhost:5173',
    'http://server-status.na4u.ru',
    'http://server-status-riot.na4u.ru'
];

const corsOptions = {
    origin: function(origin, callback) {
        // Разрешить запросы без origin (например, curl)
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    optionsSuccessStatus: 200 // Некоторые старые браузеры (например, IE11) могут обрабатывать статус 204 некорректно
};

app.use(cors(corsOptions));

app.use('/api', gameComments);
app.use('/api', gamestatusRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the application.' });
});

const PORT = process.env.PORT || 55873;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);

    startValCrone();
});

app.on('close', () => {
    closeValCrone();
});


