const apiUrl = "https://api.chucknorris.io/jokes/random";

const button = document.getElementById('getJoke')
const box = document.getElementById('joke')

button.addEventListener('click', getJoke)


async function getJoke() {
    const response = await fetch(apiUrl)
    const data = await response.json()

    const {value: joke} = data

    box.innerHTML = `
        <p>${joke}</p> 
    `
}



