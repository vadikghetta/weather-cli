#!/usr/bin/env node
import { getArgs } from "./helpers/args.js"

const initCli = () =>
{
    const args = getArgs(process.argv);
    console.log(args)
    if (args.h) {
        //Вывод помощи
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