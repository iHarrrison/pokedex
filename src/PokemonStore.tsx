
import React  from 'react';
import {atom, useRecoilState} from "recoil";

export const pokemonAtom = atom<PokemonModel | null>({
    key: "pokemon",
    default: null,
})

type SpritesModel = {
    back_default: string
}

export type PokemonModel ={
    sprites: SpritesModel;
}
//Selector to come back to at a later date
// export const getPokemon = selector<PokemonModel>({
//     key: "currentPokemon",
//     get:
//         ({get} => {
//             const currentPokemon = get(pokemonAtom);
//             return curentPokemon?.back_default || "";
//         }}
// })

export const PokemonStore = {
    usePokemon: () => useRecoilState(pokemonAtom),
}
