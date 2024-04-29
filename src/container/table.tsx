import { useEffect, useState } from "react"
import { Player, initialPlayer } from "../components/player"
import { dice } from "../assets/dice"
import './table.css'

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
    const whoseTurn = () => {
        setTurn(turn + 1)
    }
    const sort = (players: Array<Player>) => {
        let start: Player[] = []
        let played: number = 0
        players.map((element, index)=>{
            // do{
                played = dice(6)
            // }while(start.find((element) => element.order === played) === undefined)
            // console.log(start.find((element) => element.order === played) === undefined)
            // if(start.filter((element) => element.order === played) === undefined){
            return start.push({
                name: index.toString(), order: played, value: element.value, valid: element.valid, turn: index == 0 ? true : element.turn
            })
            // }
        })
        // start.forEach(()=>{ fim.push(dice(9)) })
        return start
    }
    const play = (index: number) => {
        let newArr = player.slice()
        let played: number = dice(6)
        newArr.forEach((element, index2) => {
            if(element.name == index.toString()){
                newArr[index2].value = newArr[index2].value + played
                //change turn
                newArr[index2].turn = false
                if(index2 < all-1){
                    newArr[index2 + 1].turn = true
                } else {
                    newArr[0].turn = true
                }
            }
        })
        setResult(played)
        setPlayer(newArr)
        addTurn()
    }

    return (
        <>
            <div>amount{all}</div>
            <button disabled={true}>turn{turn}</button>
            <div>result{result}</div>
            <fieldset>
                {player.map((element: Player, index: number)=>{
                    return <button key={Math.random()} disabled={!element.turn} onClick={()=>play(index)}>value:{element.value}turn:{JSON.stringify(element.turn)}</button>
                })}
            </fieldset>
            {/* <button onClick={sort}>sort</button> */}
        </>
    )
}