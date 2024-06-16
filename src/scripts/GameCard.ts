import axios from "axios";

export class GameCard {
    id: number;
    title: string;
    imageUrl: string;
    ping: string = 'can not get';
    incidents: string[] = ['nothing'];

    constructor(id: number, title: string, imageUrl: string) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;

    }

    async fetchCardInfo() {
        try {
            const response = await axios.get('http://server-status.na4u.ru/api/gamestatus/?gameid=' + this.id.toString());
            const gameData = response.data;
            const lastGameData = gameData[gameData.length - 1];
            const parsedIncidents = lastGameData.errors === null? 'nothing' : lastGameData.errors.split(';');

            this.ping = lastGameData.ping || 'can not get';
            this.incidents = parsedIncidents.length === 0 ? ["nothing"] : parsedIncidents;

        } catch (error) {
            console.error('Ошибка при получении информации карточки:', error);
        }
    }
}