import { Player, initialPlayer } from "./player";

export interface Team {
    name: string;
    player: Player[]
}

export const initialTeam: Team = {
    name: '',
    player: [initialPlayer]
}