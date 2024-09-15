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


const initCli = () =>
{
    const args = getArgs(process.argv);

    if (args.h) {
        printHelp()
    }
    if (args.s) {
        //сохранить город
    }
    if (args.t) {
        return saveToken(args.t)        //Сохранить токен
    }
    getWeather("London")
    //Вывести погоду
};

initCli()