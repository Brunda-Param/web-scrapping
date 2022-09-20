import Models from "../models";
import HTTPUtils from "../utils/http";

class Controllers{
    
    static getMarketData(req:any,res:any){
         return Models.getInstance().getCurrentMarketData().then(result => {
            return HTTPUtils.returnSuccessObject(res, result);
        }).catch(e => {
            console.warn(`Req ID: ${req.body.reqID}`)
            console.error(`Unable to get the Response. Reason: ${JSON.stringify(e)}`)
            return HTTPUtils.showError(res, e);
        })
      
    }
}

export default Controllers