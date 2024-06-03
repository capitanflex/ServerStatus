import { ref } from 'vue';
import axios from 'axios';

export default function useValAPI() {
    const status = ref(null);
    const apiKey = 'RGAPI-6f87f2b7-5a1a-4cc5-a6bd-f44fa9cb5f16';
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
            status.value.incidents = status.value.incidents.map((e) => {
                return getENIncidentTitle(e);
            });
            // console.log(status.value.incidents)

        } catch (error) {
            // console.error('Error fetching VAL status:', error);
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
