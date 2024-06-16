import { ref } from 'vue';
import axios from 'axios';

export default function useValAPI() {
    const status = ref(null);
    const apiKey = 'RGAPI-5de01433-b83b-4918-a8c5-a272fdcd8a52';
    const getStatus = async () => {
        try {
            const startTime = Date.now();
            const url = 'https://eu.api.riotgames.com/val/status/v1/platform-data?api_key=' + apiKey;
            const response = await axios.get(url);
            status.value = response.data;
            delete status.value.locales;
            delete status.value.maintenances;

            const responseTime = Date.now() - startTime;
            status.value.responseTime = responseTime.toString();
            status.value.incidents = status.value.incidents.map((e)  => {
                return getENIncidentTitle(e);
            });
            // console.log(status.value.incidents)

        } catch (error) {
            // console.error('Error fetching VAL status:', e rror);
            throw error;
        }
    };
    function getENIncidentTitle(incident) {
        const enTitle = incident?.titles.find(title => title.locale === 'en_US')
        return enTitle ? enTitle.content.toLowerCase() : '';
    }


    return {
        status,
        getStatus
    };
}
