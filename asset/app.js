const poke_container = document.getElementById('poke_container');
const pokemons_number = 150;
const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};
const main_types = Object.keys(colors);

const fetchPokemons = async () => {
	for (let i = 1; i <= pokemons_number; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async id => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
	createPokemonCard(pokemon);
};

function createPokemonCard(pokemon) {
	const pokemonEl = document.createElement('div');
	pokemonEl.classList.add('pokemon');

	const poke_types = pokemon.types.map(type => type.type.name);
	const type = main_types.find(type => poke_types.indexOf(type) > -1);
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	const color = colors[type];
    const image = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
    const id = pokemon.id
	
	// pokemonEl.style.backgroundColor = color;
    
    const btn = `
        
        <!-- Large modal -->
        <button style="color: #000; background-color: #EFBB44; width: 180px;" type="button" class="btn" data-toggle="modal" data-target="#${id}">
        ${name}
        </button>

        <div class="modal fade" id="${id}" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="img-container" style="background-color: ${color};">
                        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="${name}" />
                        
                        <p class="pokemon-type">${type}</p>
                    </div>
                </div>
            </div>
        </div>  
    `;
	
    pokemonEl.innerHTML = btn

	// pokemonEl.innerHTML = pokeInnerHTML;

	poke_container.appendChild(pokemonEl);
}

fetchPokemons();

// Optional Styles

{/* <button style="color: #000; font-weight: bold; background-color: #EFBB44; width: 180px;" class="btn" type="button" data-toggle="collapse" data-target="#${id}" aria-expanded="false" aria-controls="collapseExample">
            ${name}
        </button>
        <div class="collapse" id="${id}">
            <div class="card card-body" style="background-color: #2E3350;">
                <div class="img-container" style="background-color: ${color};">
                    <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="${name}" />
                <caption>${type}</caption>
                </div>
            </div>
        </div> */}
{/* <div class="img-container">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="${name}" />
    </div>
    <div class="info">
        <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
    </div> */}


{/* <div class="img-container">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="${name}" />
    </div>
    <div class="info">
        <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
    </div>  */}

{/* <div id="accordion">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="${pokemon.id}" aria-expanded="true" aria-controls="collapseOne">
          ${name}
        </button>
      </h5>
    </div>

    <div id="${pokemon.id}" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="${name}" />
      </div>
    </div>
  </div>
</div> */}

{/* <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        ${name}
    </button>
    <div class="collapse" id="collapseExample">
     <div class="card card-body">
        <div class="img-container">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${
                     pokemon.id
                 }.png" alt="${name}" />
        </div>
    </div>
    </div> */}

{/* <div class="img-container">
                        <img src="https://pokeres.bastionbot.org/images/pokemon/${
                                        pokemon.id
                                    }.png" alt="${name}" />
                    </div>
                    <div class="info">
                        <span class="number">#${pokemon.id
                                        .toString()
                                        .padStart(3, '0')}</span>
                        <h3 class="name">${name}</h3>
                        <small class="type">Type: <span>${type}</span></small>
                </div> */}





