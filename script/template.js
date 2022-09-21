
function renderPokeIndex(i) {
    let pokePath = allPokemonDetail[i];
    return/*html*/`
    <div class="pokeIndexOverview cursor ${pokePath.types[0].type.name}" onclick="openPokeDetail(${i})">
        <div class="pokeIndexHeadline"> 
            <span class="pokeIndexName">${pokePath.name}</span>
            <span class="pokeIndexId">${pokePath.id} #</span>
        </div>
        <div class="pokeIndexContent">
            <div class="pokeIndexTypes">${loadPokemonTypes(i)}</div>
            <img class="pokeIndexAvatar dispfl-c" src="${pokePath.sprites.front_default}">
        </div>
    </div>
    `
}

function templatePokeDetail(i) {
    let pokePath = allPokemonDetail[i];
    return/*html*/`
    <div id="pokeDetailSpacer">
        <div id="pokeDetail">
            <div class="pokeDetailNav">
                <img class="cursor" src="/img/arrow.png" onclick="closePokeDetail()">
            </div>
            <div class="pokeDetailUpper">
                <div class="pokeDetailSort">
                    <span class="pokeDetailName">${pokePath.name}</span>
                    <span class="pokeDetailId">${pokePath.id} #</span>
                </div>
                <div class="pokeDetailTypes">
                    ${loadPokemonTypes(i)}
                </div>
            </div>
            <div class="pokeDetailBtnEffect">
                <div class="pokeDetailLower">
                    <img class="pokeDetailAvatar" src="${pokePath.sprites.other.dream_world.front_default}">
                    <div class="pokeDetailMenu">
                        <ul>
                            <li onclick="switchAbout(i)" class="cursor">About</li>
                            <li onclick="switchBaseStats()" class="cursor">Base Stats</li>
                            <li onclick="switchEvolution()" class="cursor">Evolution</li>
                            <li onclick="switchMoves()" class="cursor">Moves</li>
                        </ul>
                    <div>
                    <div id="pokeDetailContent">
                        test1
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

function templateAbout() {
    return/*html*/`
    Test2
    `
}