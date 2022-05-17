import axios from "axios";

const api = axios.create({
    baseURL: "",
    params:{
        api_key: "",
        language: "en-US"

    }
})

export const formerApi ={
    temperature: () => api.get("api/formerData/temperature"),
    electicCurreunt: () => api.get("api/formerData/electricCurrent"),
    voltage: () => api.get("api/formerData/voltage")
}

/*
export const productApi ={

}
*/


api.get("test")