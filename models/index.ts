import axios from "axios";
import {load} from "cheerio";
import ServerConfig from "../config.json"

class Models {

    private static instance: any


    constructor() {
        if (Models.instance) {
            throw new Error("Can't Create new object");
        }
    }

    public static getInstance(): Models {
        if (!Models.instance) {
            Models.instance = new Models();
            console.log("[INFO] Creating Models Instance");
        }
        return Models.instance;
    }

    getCurrentMarketData(): Promise<any> {
        if(!ServerConfig["Market-Data"].URL){
            return Promise.reject("No URL Found To Fetch Data")
        }
        const url = ServerConfig["Market-Data"].URL
        return axios(url).then((response) => {
            const html_data = response.data;
            const $ = load(html_data);
            let finalData = []
            $('table > tbody > tr').each(function (i, elem) {
                var $tds = $(this).find('td');
                let obj = {
                    "Name": $tds.eq(0).text().trim() ? $tds.eq(0).text().trim() : "no-name",
                    "Min-Price": $tds.eq(1).text().trim() ? $tds.eq(1).text().trim() : 0,
                    "Max-Price": $tds.eq(2).text().trim() ? $tds.eq(2).text().trim() : 0
                }
                console.log('found it');
                finalData.push(obj)
                // write your code here
            })
            console.log(finalData)
            return Promise.resolve(finalData)
        }).catch((e)=>{
            return Promise.reject(e)
        })
    }


}

export default Models