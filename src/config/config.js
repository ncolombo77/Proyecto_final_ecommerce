import dotenv from "dotenv";
import { __dirname } from "../utils.js";
import path from "path";

const mode = process.env.NODE_ENV || 'development'

/*
dotenv.config({
  path: path.join(path.resolve(), `.env.${mode}`)
  //path: path.join(path.resolve(), '.env.development')
});
*/


dotenv.config({
  path: mode == "development" ? path.join(__dirname, "./config/.env.development") : path.join(__dirname, "./config/.env.production")
});


export const config = {
  server : {
    mode: mode,
    port: process.env.PORT || 8080,
    host: process.env.HOST || 'localhost',
    storageType: process.env.STORAGE_TYPE || 'fs'
  },
  session: {
    secret: process.env.SESSION_SECRET_KEY,
  },
  db : {
    user: process.env.ATLAS_USER,
    pass: process.env.ATLAS_PASS,
    url: process.env.ATLAS_URL,
    dbName: process.env.ATLAS_DBNAME
  },
  admin: {
   email: process.env.ADMIN_EMAIL,  //prevents bad usage of .env file
   pass: process.env.ADMIN_PASS
  },

  auth: {
    jwtSecret: process.env.AUTH_JWT_SECRET,
    github: {
      clientId: process.env.AUTH_GITHUB_CLIENT_ID,
      secretKey: process.env.AUTH_GITHUB_SECRET_KEY,
      callbackUrl: process.env.AUTH_GITHUB_CALLBACK_URL
    },
    
  },

  test: {
    regularUser: {
      email: process.env.REGULAR_USER_EMAIL,
      pass: process.env.REGULAR_USER_PASS
    },
    premiumUser: {
      email: process.env.PREMIUM_USER_EMAIL,
      pass: process.env.PREMIUM_USER_PASS
    },
    adminUser: {
      email: process.env.ADMIN_USER_EMAIL,
      pass: process.env.ADMIN_USER_PASS
    }
  }
}
