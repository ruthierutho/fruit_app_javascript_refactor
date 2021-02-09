<<<<<<< HEAD
const baseURL = 'api/fruits';
=======
const baseURL = 'http://localhost:3000/api/fruits';
>>>>>>> main

export default {
    getFruits() {
        return fetch(baseURL)
            .then(res => res.json());
    },
};


