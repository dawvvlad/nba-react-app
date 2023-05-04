import "./teams.css"
import { TeamsViewer } from "../../components/teamsviewer/TeamsViewer"
import { useContext, useEffect, useState } from "react"
import { MainContext } from "../../context/Context"
import { getTeamsData } from "../../api"
import { Preloader } from "../../components/preloader/Preloader"

export const Teams = () => {
    const { setTeams, isLoading, setIsLoading } = useContext(MainContext)
    const [ WEST, setWest ] = useState([]);
    const [ EAST, setEast ] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        getTeamsData()
            .then(data => {
                setTeams(data.sports[0].leagues[0].teams);
                setEast([
                    data.sports[0].leagues[0].teams[0].team,
                    data.sports[0].leagues[0].teams[1].team,
                    data.sports[0].leagues[0].teams[2].team,
                    data.sports[0].leagues[0].teams[3].team,
                    data.sports[0].leagues[0].teams[4].team,
                    data.sports[0].leagues[0].teams[5].team,
                    data.sports[0].leagues[0].teams[8].team,
                    data.sports[0].leagues[0].teams[11].team,
                    data.sports[0].leagues[0].teams[15].team,
                    data.sports[0].leagues[0].teams[16].team,
                    data.sports[0].leagues[0].teams[19].team,
                    data.sports[0].leagues[0].teams[21].team,
                    data.sports[0].leagues[0].teams[22].team,
                    data.sports[0].leagues[0].teams[27].team,
                    data.sports[0].leagues[0].teams[29].team])
                setWest([
                    data.sports[0].leagues[0].teams[6].team,
                    data.sports[0].leagues[0].teams[7].team,
                    data.sports[0].leagues[0].teams[9].team,
                    data.sports[0].leagues[0].teams[10].team,
                    data.sports[0].leagues[0].teams[12].team,
                    data.sports[0].leagues[0].teams[13].team,
                    data.sports[0].leagues[0].teams[14].team,
                    data.sports[0].leagues[0].teams[17].team,
                    data.sports[0].leagues[0].teams[18].team,
                    data.sports[0].leagues[0].teams[20].team,
                    data.sports[0].leagues[0].teams[23].team,
                    data.sports[0].leagues[0].teams[24].team,
                    data.sports[0].leagues[0].teams[25].team,
                    data.sports[0].leagues[0].teams[26].team,
                    data.sports[0].leagues[0].teams[28].team])
                setIsLoading(false)})
            .catch(error => console.log(error))
    }, []); 

    return (
        <>
            { isLoading ? <Preloader /> : 
            <TeamsViewer WEST={WEST} EAST={EAST} />}
        </>
    )
}