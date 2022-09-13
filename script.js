let allPokemon = [];
let allPokemonDetail = [];
let pokeId = 900;



async function loadPokemon() {
    document.getElementById('data').innerHTML = '';
    await loadPokemonIndex();
    console.log('first array', allPokemon);
    //loadPokemonDetail();
}

async function loadPokemonIndex() {
    for (let i = 1; i <= pokeId; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        responseAsJson = await response.json();
        allPokemon.push(responseAsJson);
        allPokemonDetail = allPokemon;
        console.log(i);
        if (i == 20) {
            loadPokemonDetail()
        }
    }
}

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