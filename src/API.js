const APIKey = 'fbb2ca07'
const endpoint = `http://www.omdbapi.com/?apikey=${APIKey}`
export const searchFilmFromAPI = async (searchValue) => {
    const response = await fetch(`${endpoint}&s=${searchValue}&page=1`)
    const data = await response.json();
    return data
}
export const getFilmById = async (filmId)=>{
    const response = await  fetch(`${endpoint}&i=${filmId}`)
    const data = await  response.json()
    return data
}
