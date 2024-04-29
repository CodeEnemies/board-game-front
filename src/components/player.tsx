export interface Player {
    name: string;
    order: number;
    value: number;
    valid: boolean;
    turn: boolean;
}

export const initialPlayer: Player = {
    name: '',
    order: 0,
    value: 0,
    valid: true,
    turn: false,
}