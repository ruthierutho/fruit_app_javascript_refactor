const baseURL = 'api/fruits';

export default {
    getFruits() {
        return fetch(baseURL)
            .then(res => res.json());
    },
};


