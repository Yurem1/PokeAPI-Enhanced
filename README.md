
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

# pokeapi-enhanced

A better, suitable, & concise [PokeAPI](https://pokeapi.co/) wrapper for Node projects using ES modules.

### Installation Guide:
```npm install pokeapi-enhanced```
### Usage: 
```ts
import { Pokedex } from  'pokeapi-enhanced';

const dex = await Pokedex.getPokemon('mr. mime');
const id = dex?.getPokemonId; // getter
```
   
> Always make sure that you check the [API](https://pokeapi.co/) docs for reference.    
>    
> Some pokemons might not have some properties and will display as null or undefined.

### Contributing: 
Please read our [code of conduct](https://github.com/Yurem1/PokeAPI-Enhanced/blob/main/CODE_OF_CONDUCT.md) and [contributing guidelines](https://github.com/Yurem1/PokeAPI-Enhanced/blob/main/CONTRIBUTING.md) before attempting to contribute.   
To open issues, please go [here](https://github.com/Yurem1/PokeAPI-Enhanced/issues)
### Important:
Only fetching from https://pokeapi.co/api/v2/pokemon endpoint is accessible, in the future, I will keep adding more and more endpoint access implementations.

