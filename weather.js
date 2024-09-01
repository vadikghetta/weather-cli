#!/usr/bin/env node
import { getArgs } from "./helpers/args.js"

const initCli = () =>
{
    getArgs(process.argv)
};

initCli()