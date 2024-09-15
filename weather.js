#!/usr/bin/env node
import { getArgs } from "./helpers/args.js"
import { printHelp } from "./services/logServices.js";

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
        //Сохранить токен
    }
    //Вывести погоду
};

initCli()