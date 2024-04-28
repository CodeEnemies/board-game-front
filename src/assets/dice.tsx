export const dice = (side: number) => {
    return Math.floor(Math.random() * (side - 1) + 1)
}

export const diceMinMax = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min)
}