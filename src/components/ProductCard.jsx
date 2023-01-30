import { useState } from "react"
import { BiLoaderAlt } from "react-icons/bi" 
import { createPreference } from "../services/createPreference"

import { Button } from "./Button"

export const ProductCard = ({ product }) => {
    const [ isLoading, setIsLoading ] = useState(false)

    const handleBuy = async () => {
        setIsLoading(true)

        await createPreference({ product })
        
        setIsLoading(false)
    }

    return (
        <>
            <div className="flex flex-col justify-between items-center gap-4 min-w-[250px] max-w-[350px] w-full p-8 my-[0px] mx-[auto] rounded-md border-2 shadow-custom border-transparent">
                <img src={product.image} className="max-w-[250px] w-full max-h-[250px] h-full object-contain"/>
                <h2 className="text-xl line-clamp-2 font-bold leading-none">{product.title}</h2>
                <p className="text-sm line-clamp-3 leading-none">{product.description}</p>
                <div className="flex justify-between items-center w-full">
                    <span className="font-bold text-success-500">${product.price}</span>
                    <Button onClick={handleBuy}>
                        {
                            isLoading
                                ? <i className="flex justify-center items-center animate-spin duration-100 text-2xl">
                                    <BiLoaderAlt/>
                                </i>
                                : "Buy now"
                        }
                    </Button>
                </div>
            </div>
        </>
    )
}