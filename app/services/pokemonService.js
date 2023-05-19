import { AppState } from "../AppState.js";
import { Pokemon } from "../models/pokemon.js";
import { pokeApi } from "./AxiosService.js";

class PokemonService{

    async getPokemon(){
        const res = await pokeApi.get('/api/v2/pokemon')
         AppState.pokemon = res.data.results.map(p => new Pokemon(p))
        console.log(res.data.results);
    }
    async setActivePokemon(index) {
        const res = await pokeApi.get(index)
      
    
        console.log('setting active', res.data)
    
        AppState.activePokemon = new Pokemon(res.data)
    
      }
    

    
}

export const pokemonService = new PokemonService()