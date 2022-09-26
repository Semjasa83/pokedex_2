let allPokemon = []; //for all Data
let allPokemonDetail = []; //specific Data from Pokemon
let startOffset = 1; // 1 + 40 = 41      41 + 40 = 81
let stopOffset = 30; // 40 + 40 = 80     80 + 40 = 120
let permissionForLoadMore = true;
let percent;

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
    for (let i = startOffset - 1; i < allPokemonDetail.length; i++) {
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


/********** Detailbox ************/

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


/********** DetailBox Content ************/

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

/********** DetailBox Content Variables ************/


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

/////////////////////////////////

/**
 * for receiving the Stats from current Pokemon
 * @param {number} i -- ID from current Pokemon
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
