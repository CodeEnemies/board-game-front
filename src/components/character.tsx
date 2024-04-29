export interface Character {
    hp: number;
    mana: number;
    stamina?: number;
    maxWeight?: number;
}

export const initialCharacter: Character = {
    hp: 0,
    mana: 0,
    stamina: 0,
    maxWeight: 0,
}