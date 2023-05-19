import { AppState } from "../AppState.js";

export class UserController{

    async addPokemon() {
        try {
          await userPokemonService.addPokemon()
        } catch (error) {
          Pop.error(error)
        }
      }
    
}
 export const userController = new UserController()
