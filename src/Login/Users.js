

export async function user() {
    const res = await fetch("https://api.jsonbin.io/v3/b/67143716e41b4d34e445a214");
    if (!res.ok) {
        const error = new Error("Failed to get the users");
        error.status = res.status;
        error.statusText = res.statusText;
        throw error;
    }
    const data = await res.json();
    return data.record;
}