import axios from 'axios';
const instance = axios.create({ baseURL: 'https://rickandmortyapi.com/api' });

export const getLocations = (name) => instance.get(`/location/?name=${name}`);
export const getCharacter = (name) => instance.get(`/character/?name=${name}`);
export const getEpisodes = (name, page) => instance.get(`/episode/?name=${name}&page=${page}`);
export const getLocationsAndPage = (name, page) => instance.get(`/location/?name=${name}&page=${page}`);
export const getCharacterAndPage = (name, page) => instance.get(`/character/?name=${name}&page=${page}`);
export const getCharacterNumber = (link) => instance.get(`/character/${link}`)

export const getCharacterWithoutLink = async (link) => {
    const si = link.map((item) => item.split("/")[5]);
    const data = await Promise.all(si.map(async (numbers) => {
        const r = await instance.get(`/character/${numbers}`)
        return r.data;

    }))
    return data
}

export const getEpisodeCastWithoutLink = async (link) => {
    const si = link.map((item) => item.split("/")[5]);
    const data = await Promise.all(si.map(async (numbers) => {
        const r = await instance.get(`/character/${numbers}`)
        return r.data;

    }))
    return data
}


export const getEpisodeWithoutLink = async (link) => {
    const si = link.map((item) => item.split("/")[5]);
    const data = await Promise.all(si.map(async (numbers) => {
        const r = await instance.get(`/episode/${numbers}`)
        return r.data;

    }))
    return data
}


