export const handler = async (event) => {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            message: "Hello World!",
            timestamp: new Date().toISOString(),
        }),
    };
}; 