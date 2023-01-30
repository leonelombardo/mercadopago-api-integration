import { mercadopagoController } from "../controllers/mercadopago.controller.js"

export const router = (app) => {
    app.use("/api/mercadopago", mercadopagoController)
}