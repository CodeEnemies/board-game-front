import { useEffect, useState } from "react"
import { Player, initialPlayer } from "../components/player.interface"
import { dice } from "../assets/dice"

export const Table = () => {
    const [turn, setTurn] = useState<number>(0)
    const [player, setPlayer] = useState<Player[]>([initialPlayer, initialPlayer, initialPlayer, initialPlayer])
    const [result, setResult] = useState<number>(0)
    const [all, setAll] = useState<number>(player.length)

    useEffect(()=>{
        setPlayer(sort(player))
    }, [])

    const addTurn = () => {
        setTurn(turn + 1)
    }
    const sort = (players: Array<Player>) => {
        let start: Player[] = []
        players.map((element, index)=>{
            return start.push({
                name: index.toString(), order: dice(6), value: element.value, valid: element.valid
            }) 
        })
        // start.forEach(()=>{ fim.push(dice(9)) })
        return start
    }
    const play = (index: number) => {
        let newArr = player.slice()
        let played: number = dice(6)
        newArr.map((element, index2 ) => {
            if(element.name == index.toString()){
                return newArr[index2].value = newArr[index2].value + played
            }
        })
        setResult(played)
        setPlayer(newArr)
        addTurn()
    }

    return (
        <>
            <>amount{all}</>
            <button disabled={true}>turn{turn}</button>
            <>result{result}</>
            {player.map((element: Player, index: number)=>{
                return <button key={Math.random()} onClick={()=>play(index)}>order:{element.order}value:{element.value}</button>
            })}
        </>
    )
}