export interface Item {
    // o quão boa ela é
    // o quão bem ele á utilizada
    status: number;
    minValue: number;
    maxValue: number;
}

export const initialItem: Item = {
    status: 0,
    minValue: 0,
    maxValue: 0,
}