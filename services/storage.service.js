import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";


const filePath = join(homedir(), "weather_data.json")
const TOKEN_DICTIONARY = {
    token: "token",
    city: "city"
}
const isExist = async (path) =>
{
    try {
        await promises.stat(path)
        return true
    } catch {
        return false
    }
}

const saveKeyValue = async (key, value) =>
{
    let data = {};
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        data = JSON.parse(file)
    }
    data[key] = value;
    await promises.writeFile(filePath, JSON.stringify(data));
}
const getKey = async (key) =>
{
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        const data = JSON.parse(file)
        return data[key]
    }
    return undefined
}

export { saveKeyValue, getKey, TOKEN_DICTIONARY }