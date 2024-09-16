#!/usr/bin/env node
import { getArgs } from "./helpers/args.js"
import { getWeather } from "./services/api.service.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";


const saveToken = async (token = "") =>
{
    if (!token.length) {
        printError("Не передан токен")
    }
    try {

        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess("Токен сохранен")
    } catch (e) {
        printError(e.message)
    }
}

const getForcast = async () =>
{
    try {

        const weather = await getWeather("dzhoy")
        console.log(weather)
    } catch (e) {
        if (e?.response?.status === 404) {
            printError("Не верно указан город")
        } else if (e?.response?.status === 401) {
            printError("Не верно указан токен")
        } else {
            printError(e.message)

        }
    }
}


const initCli = () =>
{
    const args = getArgs(process.argv);
    // console.log(process.env)
    if (args.h) {
        printHelp()
    }
    if (args.s) {
        //сохранить город
    }
    if (args.t) {
        return saveToken(args.t)        //Сохранить токен
    }
    getForcast()
    // getWeather("moscow")
    //Вывести погоду
};

initCli()