const API_MAIN = 'https://api.jikan.moe/v4/anime?page=1&limit=9'

const mainEl = document.getElementById('main')

getAnimes()

async function getAnimes() {
    const response = await fetch(API_MAIN)
    const res = await response.json()
    
    showAnimes(res.data)
}

function showAnimes(animesArray) {
    mainEl.innerHTML = ''

    animesArray.forEach(anime => {
        const {title, images, score, genres} = anime

        const animeEl = document.createElement('div')
        animeEl.classList.add('animeDiv')

        animeEl.innerHTML = `
            <h3>${title}</h3>
            <img src=${images.jpg.image_url} alt=${title}/>
            <h4>${score} ★</h4>
            <div>
                ${genres.map(genre => {
                    return `<h5> • ${genre.name}</h5>`
                }).join('')}
            </div>
        `
        mainEl.appendChild(animeEl)
    });
}