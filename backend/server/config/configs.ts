
import { resolve } from "path"

import { config } from "dotenv"

config({ path: resolve(__dirname, "../../.env") })

export const jwt_secret = process.env.JWT_SECRET

export const port = process.env.PORT

export const db = process.env.DB

export const ip = '10.0.0.109';