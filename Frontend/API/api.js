const BASE_URL = "http://localhost:3000/api";

export async function getPlayers() {
    const response = await fetch(`${BASE_URL}/players`)
    return response.json();
}