import cron from 'node-cron';
import useValAPI from "./ApiUse/val-api.js";
import { parseValStatus } from "../controllers/val.controller.js";

let task = null;

async function sendRequest() {
    const { status, getStatus } = useValAPI();
    try {
        await getStatus();
        await parseValStatus(status.value)
    } catch (error) {
        console.error(error);
    }
}

export function startValCrone() {
    task = cron.schedule('* * * * *', () =>  {
        console.log('will execute every minute until stopped');
        sendRequest();
    });

    task.start();
}

export function closeValCrone() {
    console.log("Valorant crone task has been stopped")
    task.stop();
}


