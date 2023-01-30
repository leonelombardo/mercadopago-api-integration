export const getProducts =  async () => {
    try{
        const response = await fetch("src/database/products.json")
        const data = await response.json()

        return { data }
    }catch(error){
        return { error }
    }
}