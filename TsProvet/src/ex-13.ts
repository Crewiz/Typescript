import axios from 'axios';
import { z } from 'zod';

const PokemonSchema = z.object({
  name: z.string(),
  height: z.number(),
  weight: z.number(),
});

type Pokemon = z.infer<typeof PokemonSchema>;

async function getPokemonBMI(pokemonName: string) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    const pokemon = PokemonSchema.parse(response.data);

    const weightInKg = pokemon.weight / 10;
    const heightInM = pokemon.height / 10;
    const bmi = weightInKg / (heightInM * heightInM);

    console.log(`BMI för ${pokemon.name}:`, bmi);
  } catch (error) {
    console.error('Ett fel uppstod under hämtningen av Pokémon-data', error);
  }
}

getPokemonBMI('pikachu');
