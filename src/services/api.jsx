import axios from 'axios';
const instance = axios.create({ baseURL: 'https://rickandmortyapi.com/api' });

export const getLocations = (name) => instance.get(`/location/?name=${name}`);
export const getCharacter = (name) => instance.get(`/character/?name=${name}`);
export const getCharacterWithoutLink = (link) => instance.get(`/character/${link}`)
export const getLocationsAndPage = (name, page) => instance.get(`/location/?name=${name}&page=${page}`);
export const getCharacterAndPage = (name, page) => instance.get(`/character/?name=${name}&page=${page}`);
