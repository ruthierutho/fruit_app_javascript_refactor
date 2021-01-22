const baseURL = 'http://localhost:3000/api/fruits';

export default {
    getFruits() {
        return fetch(baseURL)
            .then(res => res.json());
    },
};


