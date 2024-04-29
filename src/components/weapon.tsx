export interface Weapon {
    // o quão boa ela é
    // o quão bem ele á utilizada
    status: number;
    minDamage: number;
    maxDamage: number;
}

export const initialWeapon: Weapon = {
    status: 0,
    minDamage: 0,
    maxDamage: 0,
}