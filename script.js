let allPokemon = [];
let allPokemonDetail = [];
let pokeId = 50;

/**
 * fetches the Main Path from API for all Pokemon
 */

async function loadPokemon() {
    document.getElementById('data').innerHTML = '';
    await loadPokemonIndex();
    //console.log('first array', allPokemon); //_____CONSOLE
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
        //console.log(i);   //_____CONSOLE
        if (i == 20) {
            loadPokemonData();
        }
    }
}

/**
 * fetch types
 */

function loadPokemonTypes(i) {
    let htmlCode = "";
    for (let j = 0; j < allPokemonDetail[i].types.length; j++) {
        const types = allPokemonDetail[i].types[j];
        htmlCode += /*hmtl*/`
        <div class="overview-type-container ${types.type['name']}">
        <div>${types.type['name']}</div>
        `
    }
    return htmlCode;
}

/**
 * Render first 20 Pokemon
 */
function loadPokemonData() {
    for (let i = 0; i < allPokemonDetail.length; i++) {
        let element = allPokemonDetail[i];
        console.log('detail array', element); //_____CONSOLE
        loadPokemonTypes(i);
        document.getElementById('data').innerHTML += renderPokeData(i);
    }
}


function renderPokeData(i) {

    return /*html*/`
        <ul >
            <li>
                id: ${allPokemonDetail[i].id}
            </li>
            <li>
                name: ${allPokemonDetail[i].name}
            </li>
            <li>
                type: ${loadPokemonTypes(i)}
            </li>
            <img src="${allPokemonDetail[i].sprites.front_default}">
        </ul>

 `
}