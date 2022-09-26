
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
                <img class="cursor" src="../img/arrow.png" onclick="closePokeDetail()">
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
                            <li onclick="switchAbout(${i})" class="cursor">About</li>
                            <li onclick="switchBaseStats(${i})" class="cursor">Base Stats</li>
                            <li onclick="switchMoves(${i})" class="cursor">Moves</li>
                        </ul>
                    <div>
                    <div id="pokeDetailContent">
                        <div id="templateAbout">
                            <table class="tableAbilities">
                                <tr>
                                    <th>Species</th>
                                    <td class="nameUppercase">${pokePath.species.name}</td>
                                </tr>
                                <tr>
                                    <th>Height</th>
                                    <td>${pokePath.height}0 cm</td>
                                </tr>
                                <tr>
                                    <th>Weight</th>
                                    <td>${pokePath.weight}00 g</td>
                                </tr>
                                <tr>
                                    <th>Abilities</th>
                                    <td>${pullAbilities(i)}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

function templateAbout(i, pokePath) {
    return/*html*/`
    <div id="templateAbout">
    <table class="tableAbilities">
        <tr>
            <th>Species</th>
            <td class="nameUppercase">${pokePath.species.name}</td>
        </tr>
        <tr>
            <th>Height</th>
            <td>${pokePath.height}0 cm</td>
        </tr>
        <tr>
            <th>Weight</th>
            <td>${pokePath.weight}00 g</td>
        </tr>
        <tr>
            <th>Abilities</th>
            <td>${pullAbilities(i)}</td>
        </tr>
    </table>
</div>
    `
}

function templateMoves(i) {
    return/*html*/`
    <div class="detailMoves">
        ${pullMoves(i)}
    </div>
    `
}

function templateBaseStats(pokePath) {
    return/*html*/`
    <div id="templateStats">
    <table class="tableStats">
        ${pullStats(pokePath)}
    </table>
</div>
    `
}


//////////////////////////////////////////////////////////////////////////

function templateStatsBar(allStats) {
    let w = allStats.base_stat;
    let g = 255;
    let p = (w / g) * 100;
    p = p.toFixed(0) + "%";
    return/*html*/`
    <tr>
        <th>${allStats.stat.name}</th>
        <td class="baseStats">${allStats.base_stat}</td>
        <td class="statsBar">
            <span class="statsProgess" id="progress" style="height: 100%; width: ${p}"></span>
        </td>
    </tr>
    `
}



/*  ----> diese Funktion in Width einfügen!!!!!!
function templateProgressbar(p, l) {
    document.getElementById(`progress_${l}`).style.width = p.toFixed(0) + "%";
}   
*/

/*
function statsCalcProgressBar(allStats, l) {
    let w = allStats;
    let g = 255;
    let p = (w / g)* 100;
    templateProgressbar(p, l);
}
*/