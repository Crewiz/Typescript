"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const zod_1 = require("zod");
const PokemonSchema = zod_1.z.object({
    name: zod_1.z.string(),
    height: zod_1.z.number(),
    weight: zod_1.z.number(),
});
function getPokemonBMI(pokemonName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            const pokemon = PokemonSchema.parse(response.data);
            const weightInKg = pokemon.weight / 10;
            const heightInM = pokemon.height / 10;
            const bmi = weightInKg / (heightInM * heightInM);
            console.log(`BMI för ${pokemon.name}:`, bmi);
        }
        catch (error) {
            console.error('Ett fel uppstod under hämtningen av Pokémon-data', error);
        }
    });
}
getPokemonBMI('pikachu');
