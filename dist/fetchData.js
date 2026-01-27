export async function fetchData(url) {
    try {
        const response = await fetch(url);
        console.log(response);
        if (!response.ok)
            throw new Error("Error" + response.status);
        const json = await response.json();
        return json;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("FetData: " + error.message);
        }
        return null;
    }
}
//# sourceMappingURL=fetchData.js.map