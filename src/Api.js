

export async function getVans() {
    const res = await fetch("https://api.jsonbin.io/v3/b/670aa770ad19ca34f8b73e1b")
    if (!res.ok) {
        const error = new Error("failed to fetch data");
        error.statusText = res.statusText
        error.status = res.status
        throw error;
    }
    const data = await res.json()
    return data.record
}