export const getTeamsData = async () => {
    try {
        const response = await fetch(`http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams`)
        return response.json()
    }

    catch(err) {
        console.log(err);
    }
}

export async function getSpecificTeam (teamId) {
    try {
        const response = await fetch(`http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${teamId}`)
        return response.json()
    }

    catch(err) {
        console.log(err);
    }
}

export const getPlayers = async () => {
    const response = await fetch(`http://localhost:3000/roster.js`);
    
    return response.json()
}