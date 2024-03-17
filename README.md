
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

# pokeapi-enhanced

A better suitable [PokeAPI](https://pokeapi.co/) wrapper for Node projects using ESM.

### Installation Guide:
```npm install pokeapi-enhanced```
### Usage: 
```ts
import Pokedex from 'pokeapi-enhanced';

const  dex  =  new  Pokedex('pikachu');
const  entry  =  await  dex.getPokemon();

const  heldItem  =  entry?.held_items?.[0].item;
const  pastType  =  entry?.past_types?.[0]?.types?.[0]?.type?.name;
```

> Always make sure that you check the [API](https://pokeapi.co/) docs for reference.   
> Some pokemons might not have some properties and will display as null or undefined.

### Important:
Only fetching from https://pokeapi.co/api/v2/pokemon endpoint is accessible, in the future, I will keep adding more and more endpoint accesses.
