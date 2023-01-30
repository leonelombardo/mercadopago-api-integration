import fetch from "node-fetch"
import { Router } from "express"

export const mercadopagoController = Router()

const MERCADOPAGO_ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN

mercadopagoController.post("/", async (req, res) => {
    const { id, title, price, quantity } = req.body

    try{
        const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${MERCADOPAGO_ACCESS_TOKEN}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                items: [
                    {
                        id,
                        title,
                        currency_id: "USD",
                        unit_price: (price * quantity) * 2,
                        quantity,
                    }
                ]
            })
        })

        const data = await response.json()

        res.status(201).json({ status: 201, success: true, error: false, response: data })
    }catch(error){
        res.status(500).json({ error: error })
    }
})