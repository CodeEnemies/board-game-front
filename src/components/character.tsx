export interface Character {
    // status aumenta durante o modo sanin
    status: number;
    hp: number;
    mana: number;
    stamina?: number;
    maxWeight?: number;
}

export const initialCharacter: Character = {
    status: 0,
    hp: 0,
    mana: 0,
    stamina: 0,
    maxWeight: 0,
}