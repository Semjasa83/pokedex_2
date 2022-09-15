let allPokemon = [];
let allPokemonDetail = [];
//let pokeId = 898;
let startOffset = 1; // 1 + 40 = 41      41 + 40 = 81
let stopOffset = 40; // 40 + 40 = 80     80 + 40 = 120
let permissionForLoadMore = true;

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
    for (let i = startOffset; i <= stopOffset; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        responseAsJson = await response.json();
        allPokemon.push(responseAsJson);
        allPokemonDetail = allPokemon;
        //console.log(i);   //_____CONSOLE
         // i % 20 == 0
    
    }
    loadPokemonData();
    console.log(allPokemonDetail);
    permissionForLoadMore = true;
}

/**
 * fetch types
 */

function loadPokemonTypes(i) {
    let htmlCode = "";
    for (let j = 0; j < allPokemonDetail[i].types.length; j++) {
        const types = allPokemonDetail[i].types[j];
        htmlCode += /*html*/`
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
    for (let i = startOffset - 1; i < allPokemonDetail.length; i++) {
        let element = allPokemonDetail[i];
        //console.log('detail array', element); //_____CONSOLE
        loadPokemonTypes(i);
        document.getElementById('data').innerHTML += renderPokeData(i);
    }
}


function renderPokeData(i) {

    return /*html*/`
        <ul class="test-div">
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
        </ul>`
}


//when you are near the bottom of Site --> load more Pokemons 
function lazyLoading() {
    if ((window.innerHeight + window.scrollY + 400) >= document.body.offsetHeight && permissionForLoadMore) {
        permissionForLoadMore = false;
        loadMorePokemon();
    }
}


async function loadMorePokemon() {
    startOffset += 40;
    stopOffset += 40;
    await loadPokemonIndex();
    // loadPokemonData();
}
