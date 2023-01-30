export const createPreference = async ({ product }) => {
    try{
        const response = await fetch("/api/mercadopago", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...product, quantity: 1 })
        })

        const data = await response.json()
        const { error } = data

        if(error) return console.error(error)

        const { init_point } = data.response
        
        window.open(init_point, "_blank")
    }catch(error){
        console.error(error)
    }
}