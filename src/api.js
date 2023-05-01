export const getTeamsData = async () => {
    const response = await fetch(`https://www.balldontlie.io/api/v1/teams`)
    return response.json()
}