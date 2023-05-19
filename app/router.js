import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { pokemonController } from "./controllers/pokemonController.js";

export const router = [
  { 
    path: '',
  controller: pokemonController
  }
]