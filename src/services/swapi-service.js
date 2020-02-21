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

    _extractId(item){
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    };

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            passengers: starship.passengers,
            crew: starship.crew,
        }
    };

    _transformPeople = (human) => {
        return {
            id: this._extractId(human),
            name: human.name,
            height: human.height,
            gender: human.gender,
            birthYear: human.birth_year,
        }
    }
    async getAllPeople(){
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPeople);
    };

    async getPerson(id){
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPeople(person);
    };

    async getAllPlanets(){
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    };

    async getPlanet(id){
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    };

    async getAllStarships(){
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    };

    async getStarship(id){
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    };
}