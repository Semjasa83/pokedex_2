let allPokemon = []; //for all Data
let allPokemonDetail = []; //specific Data from Pokemon
let startOffset = 1; // 1 + 30 = 31      31 + 30 = 61
let stopOffset = 30; // 30 + 30 = 60     60 + 30 = 90
let permissionForLoadMore = true; //for initialize Load on Scroll
let filteredPokemon = [];

/********** API Fetch for Data ************/

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
    //console.log(allPokemonDetail);  //_____CONSOLE
    permissionForLoadMore = true;
}

/********** Render Functions ************/

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
 * Render first 30 Pokemon
 */
function loadPokemonData() {
    document.getElementById('pokeIndex').innerHTML = '';
    for (let i = 0; i < allPokemonDetail.length; i++) {
        let pokePath = allPokemonDetail[i];
        //console.log('detail array', element); //_____CONSOLE
        loadPokemonTypes(i);
        document.getElementById('pokeIndex').innerHTML += renderPokeIndex(i, pokePath);
    }
}


/********** Index Load ************/

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


/********** Triggers for Detailbox ************/

/**
 * open Pokemon Detailbox
 */
function openPokeDetail(i, pokePath) {
    let overlay = document.getElementById('pokeDetailPopup');
    let noscroll = document.getElementById('bodyScroll');
    overlay.classList.remove('d-none');
    noscroll.classList.add("noscrolling");
    overlay.innerHTML = templatePokeDetail(i, pokePath);
    console.log('test', allPokemonDetail[i])
}

/**
 * close Pokemon Detailbox
 */
function closePokeDetail() {
    let closePopup = document.getElementById('pokeDetailPopup');
    let scroll = document.getElementById('bodyScroll');
    closePopup.classList.add('d-none');
    scroll.classList.remove("noscrolling");
}


/********** DetailBox Static Content ************/

/**
 * Menu Button for About in Detail Popup 
 * @param {number} i 
 */
function switchAbout(i){
    let pokePath = allPokemonDetail[i];
    console.log(pokePath); //_____CONSOLE
    let setContent = document.getElementById('pokeDetailContent');
    setContent.innerHTML = '';
    setContent.innerHTML = templateAbout(i, pokePath);
}

/**
 * Menu Button for Stats in Detail Popup 
 * @param {number} i 
 */
function switchBaseStats(i){
    let pokePath = allPokemonDetail[i];
    let setContent = document.getElementById('pokeDetailContent');
    setContent.innerHTML = '';
    setContent.innerHTML = templateBaseStats(pokePath);
}

/**
 * Menu Button for Moves in Detail Popup 
 * @param {number} i 
 */
function switchMoves(i){
    let setContent = document.getElementById('pokeDetailContent');
    setContent.innerHTML = '';
    setContent.innerHTML = templateMoves(i);
}

/********** DetailBox variable Content ************/


/**
 * for receiving the Abilities from current Pokemon
 * @param {number} i -- ID from current Pokemon 
 * @returns -- Abilities from Pokemon
 */
function pullAbilities(i){
    let pokePath = allPokemonDetail[i];
    let htmlCode = '';
    for (let j = 0; j < pokePath.abilities.length; j++) {
        const element = pokePath.abilities[j];
        //console.log(element.ability.name);  //_______CONSOLE
        htmlCode += `<span class="abilitySpacer">${element.ability.name}</span>`;
    } 
    return htmlCode;
}

/**
 * for receiving whole Moves from current Pokemon
 * @param {number} i -- ID from current Pokemon 
 * @returns -- List of all Moves from current Pokemon
 */
function pullMoves(i){
    let pokePath = allPokemonDetail[i];
    let htmlCode = '';
    for (let j = 0; j < pokePath.moves.length; j++) {
        const element = pokePath.moves[j];
        htmlCode += `<span class="moveSpacer">${element.move.name}</span>`;
    } 
    return htmlCode;
}

/**
 * for receiving the Stats from current Pokemon
 * @param {Path from JSON} pokePath -- allPokemonDetail[i]
 * @returns 
 */
function pullStats(pokePath){
    let htmlCode = '';
    for (let l = 0; l < pokePath.stats.length; l++) {
        const allStats = pokePath.stats[l];
        console.log(allStats);
        htmlCode += templateStatsBar(allStats);
    }
    return htmlCode;
}


/**
 * Searches for each loaded Pokemon by letter
 */
function searchPokemon() {
    let search = document.getElementById('searchinput').value;
    if (search.length == 0) {
        allPokemonDetail = allPokemon;
        loadPokemonData();
    } else {
        allPokemonDetail = allPokemon.filter(p => p.name.includes(search));
        console.log(allPokemonDetail);  //_____console
        
        renderFilteredPokemons();
    }

}

function renderFilteredPokemons() {
    document.getElementById('pokeIndex').innerHTML = '';
    for (let index = 0; index < allPokemonDetail.length; index++) {
        let pokePath = allPokemonDetail[index];
        document.getElementById('pokeIndex').innerHTML += renderPokeIndex(index, pokePath);
        
    }
}