import { AppState } from "../AppState.js";
import { UserController } from "../controllers/userController.js";
UserController
class UserPokemon{

    async addPokemon() {
        const res = await sandboxApi.post('api/pokemon', AppState.activePokemon)
        const newPokemon = new Pokemon(res.data)
        AppState.userPokemon.push(newPokemon)
        AppState.emit('userPokemon')
    
      }

}

export const userPokemon = new UserPokemon()