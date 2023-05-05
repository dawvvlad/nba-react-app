export const getTeamsData = async () => {
    try {
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams`, {
            headers: {
                "Content-Type": "Application/x-www-form-urlencoded",
                Accept: "application/json"
            }
        })
        return response.json()
    }

    catch(err) {
        console.log(err);
    }
}

export async function getSpecificTeam (teamId) {
    try {
        const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${teamId}`, {
            headers: {
                "Content-Type": "Application/x-www-form-urlencoded",
                Accept: "application/json"
            }
        })
        return response.json()
    }

    catch(err) {
        console.log(err);
    }
}

export const getPlayers = async () => {
    const response = await fetch(`./roster.js`);
    
    return response.json()
}