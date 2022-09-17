
function renderPokeIndex(i){
    let pokePath = allPokemonDetail[i];
    return/*html*/`
    <div class="pokeIndexOverview">
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
