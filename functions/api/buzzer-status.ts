export async function onRequest() {
    try {
        const response = await fetch("https://freshbuzzer.com/code/33ff05ec-1c61-482f-b65b-55faf5911d73", {
            headers: {
                "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)"
            }
        });
        
        const html = await response.text();
        const isDisabled = html.includes('Your access has been temporarily disabled') || html.includes('disabled="disabled"');

        return new Response(JSON.stringify({ isDisabled }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-store, max-age=0"
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ isDisabled: false, error: true }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
