export default class SwapiService {
    _apiBase = 'https://swapi.co/api';

    async getResource(url) {
        try {
            const res = await fetch(`${this._apiBase}${url}`);
            if(!res.ok){
                throw new Error('Something went wrong with server');
            }
            const body = await res.json();
            return body;
        } catch (e) {
            throw new Error('Something went wrong...');
        }
    };

    async getAllPeople(){
        const res = await this.getResource(`/people/`);
        return res.results;
    };

    getPerson(id){
        return this.getResource(`/people/${id}/`);
    };

    async getAllPlanets(){
        const res = await this.getResource(`/planets/`);
        return res.results;
    };

    getPlanet(id){
        return this.getResource(`/planets/${id}/`);
    };

    async getAllStarships(){
        const res = await this.getResource(`/starships/`);
        return res.results;
    };

    getStarship(id){
        return this.getResource(`/starships/${id}/`);
    };
}