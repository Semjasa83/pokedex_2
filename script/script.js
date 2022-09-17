let allPokemon = []; //for all Data
let allPokemonDetail = []; //specific Data from Pokemon
let startOffset = 1; // 1 + 40 = 41      41 + 40 = 81
let stopOffset = 30; // 40 + 40 = 80     80 + 40 = 120
let permissionForLoadMore = true;

/**
 * fetches the Main Path from API for all Pokemon
 */
async function loadPokemon() {
    document.getElementById('pokeIndex').innerHTML = '';
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
         // i % 20 == 0 ----------------> INFO EINHOLEN!!!!!!
    }
    loadPokemonData();
    console.log(allPokemonDetail);  //_____CONSOLE
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
        <div class="pokeIndexType dispfl-c ${types.type['name']}">
        ${types.type['name']}</div>
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
        document.getElementById('pokeIndex').innerHTML += renderPokeIndex(i);
    }
}


/**
 * when you are near the bottom of Site --> load more Pokemons 
 */
function scrollLoading() {
    if ((window.innerHeight + window.scrollY + 400) >= document.body.offsetHeight && permissionForLoadMore) {
        permissionForLoadMore = false;
        loadMorePokemon();
    }
}


/**
 * load 30 Pokemon by Scroll
 */
async function loadMorePokemon() {
    startOffset += 30;
    stopOffset += 30;
    await loadPokemonIndex();
}
