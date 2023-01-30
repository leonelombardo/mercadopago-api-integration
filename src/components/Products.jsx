import { useEffect, useState } from "react"

import { ProductCard } from "../components/ProductCard"
import { getProducts } from "../services/getProducts"

export const Products = () => {
    const [ products, setProducts ] = useState([])

    useEffect(() => {
        (async () => {
            const { data, error } = await getProducts()

            if(error) return console.error(error)

            setProducts(data)
        })()
    }, [])
    
    return (
        <>
            {
                products.length
                    ? <div className="grid grid-cols-autofill gap-4 max-w-[1000px] w-full">
                        {
                            products.map(product => <ProductCard key={product.id} product={product}/>)
                        }
                    </div>
                    : <span className="text-lg font-semibold text-center">There are no products.</span>
            }
        </>
    )
}