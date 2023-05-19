import { AppState } from "../AppState.js";
import { pokemonService } from "../services/pokemonService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js"

function _drawPokemon() {
    let template = ''
    AppState.pokemon.forEach(p => 
        {template += p.PokemonCard });
    setHTML('pokeRow', template)
}

function _drawActivePokemon(){
   
setHTML('activePokemon', AppState.activePokemon.ActivePokemonCardTemplate)
}


export class pokemonController{
constructor(){
    AppState.on('pokemon', _drawPokemon)
    AppState.on('activePokemon', _drawActivePokemon)
    this.getPokemonFromApi()
    console.log('pokemon controller');
}
 async getPokemonFromApi(){
    try{
        await pokemonService.getPokemon()
    } catch (error){
        Pop.error(error)
    }
 }
 async setActivePokemon(url) {
    try {
      await pokemonService.setActivePokemon(url)
    } catch (error) {
      Pop.error(error)
    }
  }

}