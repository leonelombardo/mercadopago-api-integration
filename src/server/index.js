import express from "express"

import { PORT } from "./config.js"
import { router } from "./router/router.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

router(app)

app.listen(PORT, () => console.log(`Server running at port ${PORT}.`))