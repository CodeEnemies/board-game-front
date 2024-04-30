import { useEffect, useState } from "react"
import { Team, initialTeam } from "../components/team"
import { dice } from "../assets/dice"
import './table.css'

export const Table = () => {
    const [turn, setTurn] = useState<number>(0)
    const [team, setTeam] = useState<Team[]>([initialTeam, initialTeam, initialTeam, initialTeam])
    const [result, setResult] = useState<number>(0)
    const [all, setAll] = useState<number>(team.length)

    useEffect(()=>{
        setTeam(sort(team))
    }, [])

    const addTurn = () => {
        setTurn(turn + 1)
    }
    const whoseTurn = () => {
        setTurn(turn + 1)
    }
    const sort = (teams: Array<Team>) => {
        let start: Team[] = []
        let played: number = 0
        teams.map((element, index)=>{
            // do{
                played = dice(6)
            // }while(start.find((element) => element.order === played) === undefined)
            // console.log(start.find((element) => element.order === played) === undefined)
            // if(start.filter((element) => element.order === played) === undefined){
            return start.push(
                {name: index.toString(), player: [{order: played, value: element.player[0].value, turn: index == 0 ? true : element.player[0].turn}] }
            )
            // }
        })
        // start.forEach(()=>{ fim.push(dice(9)) })
        return start
    }
    const play = (index: number) => {
        let newArr = team.slice()
        let played: number = dice(6)
        newArr.forEach((element, index2) => {
            if(element.name == index.toString()){
                newArr[index2].player[0].value = newArr[index2].player[0].value + played
                //change turn
                newArr[index2].player[0].turn = false
                if(index2 < all-1){
                    newArr[index2 + 1].player[0].turn = true
                } else {
                    newArr[0].player[0].turn = true
                }
            }
        })
        setResult(played)
        setTeam(newArr)
        addTurn()
    }

    return (
        <>
            <>amount {all} </>
            <button disabled={true}>turn {turn}</button>
            <div>result {result}</div>
            <fieldset>
                {team.map((element: Team, index: number)=>{
                    return <fieldset>
                        <button key={Math.random()} disabled={!element.player[0].turn}>order: {element.player[0].order} value:{element.player[0].value} turn:{JSON.stringify(element.player[0].turn)}
                        </button>
                        <button disabled={!element.player[0].turn} onClick={()=>play(index)}>👊</button>
                    </fieldset>
                })}
            </fieldset>
            <a href={"https://dreamyguy.github.io/react-emojis/"} target="_blank">ref: </a>
            ❤️️🖤
            {/* <button onClick={sort}>sort</button> */}
        </>
    )
}