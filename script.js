let allPokemon = [];
let allPokemonDetail = [];
let pokeId = 50;

/**
 * fetches the Main Path from API for all Pokemon
 */

async function loadPokemon() {
    document.getElementById('data').innerHTML = '';
    await loadPokemonIndex();
    console.log('first array', allPokemon);
}

/**
 * Push every single Pokemon as JSON in allPokeDetail
 */
async function loadPokemonIndex() {
    for (let i = 1; i <= pokeId; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        responseAsJson = await response.json();
        allPokemon.push(responseAsJson);
        allPokemonDetail = allPokemon;
        console.log(i);
        if (i == 20) {
            loadPokemonDetail();
        } 
    }
}

/**
 * Render first 20 Pokemon
 */
function loadPokemonDetail() {
    for (let i = 0; i < allPokemonDetail.length; i++) {
        let element = allPokemonDetail[i];
        console.log('detail array', element);
        document.getElementById('data').innerHTML += renderPokeData(i);
    }
}


function renderPokeData(i) {

    return /*html*/`
        <ul >
            <li>
                id: 
            </li>
            <li>

            </li>
            <li>

            </li>
            <li>
                <ul>
                    <li>

                    </li>
                    <li>

                    </li>
                </ul>
            </li>
        </ul>

 `
}