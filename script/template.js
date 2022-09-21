
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
    <div id="pokeDetailSpacer" onclick="closePokeDetail()">
        <div id="pokeDetail">
            <div class="pokeDetailNav">
                <span class="cursor">Go Back</span>
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
                            <li>About</li>
                            <li>Base Stats</li>
                            <li>Evolution</li>
                            <li>Moves</li>
                        </ul>
                    <div>
                </div>
            </div>

        </div>
    </div>
    `
}