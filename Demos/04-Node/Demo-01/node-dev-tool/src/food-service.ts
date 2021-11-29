import axios from 'axios';

export class FoodService {
    constructor(private url) {}

    log() {
        console.log('hello word logged from util');
    }

    async getFoodFetch() {
        return fetch(this.url).then((resp) => resp.json());
    }

    async getFood() {
        return axios.get(this.url);
    }

    async addFood(item) {
        return axios.post(this.url, item);
    }
}
