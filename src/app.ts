import express, { Request, Response, NextFunction } from 'express'
const app = express()

require("dotenv").config();

import { server, database, error } from './helpers/messages';

import * as handlebars from 'express-handlebars'
import * as path from 'path';
import * as session from 'express-session';
import * as parser from "cookie-parser"
import * as logger from "morgan"
import config from "config";

app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', handlebars.engine({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');


app.use(session.default({
    secret: "21831DSA2391DS236ASDSA7812DAASS23213DSA27",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 2 * 60 * 1000 }
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger.default("dev"))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(parser.default());

import client from "./routes/client";
app.get('/', client)

const port = config.get<number>("port")

app.listen(port, () => {
    server(`Servidor aberto e operando na porta ${port}: http://localhost:${port}`);
})