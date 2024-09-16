// import https from "https"
import { getKey, TOKEN_DICTIONARY } from "./storage.service.js";
import axios from "axios";


const getWeather = async (city) =>
{
    const token = await getKey(TOKEN_DICTIONARY.token)
    console.log(token)
    if (!token) {
        throw new Error("Не задан ключ апи задайте его через команду -t")
    }

    const { data: cityChords } = await axios.get("http://api.openweathermap.org/geo/1.0/direct", {
        params: {
            q: city,
            appid: token
        }
    })

    const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
            lat: cityChords[0].lat,
            lon: cityChords[0].lon,
            lang: "ru",
            appid: token
        }
    })
    console.log(data)
    return data
}

export { getWeather }



// const url = `api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API}`
// const url = new URL("https://api.openweathermap.org/geo/1.0/direct");
// url.searchParams.append("q", city)
// url.searchParams.append("appid", token)
// // url.searchParams.append("lang", "ru")
// // url.searchParams.append("units", "metrics")


// https.get(url, (response) =>
// {
//     console.log("start")
//     let result = ""
//     response.on("data", (chunk) =>
//     {
//         result += chunk
//     })
//     response.on("end", () =>
//     {
//         console.log(result)
//     })
//     response.on("error", (error) =>
//     {
//         console.log(error)
//     })
// })