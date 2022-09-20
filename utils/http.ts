

class HTTPUtils {

    static showError(res: any, msg: string) {
        console.log(`sending res status is: 400 for ${res.getHeader('reqID')}`)
        res.status(400);
        res.json({
            status: false,
            message: msg
        });
    }

    static returnSuccessObject(res: any, response: any) {
        console.log(`sending res status is: 200 for ${res.getHeader('reqID')}`)
        res.status(200);
        res.json({
            status: true,
            message: "Success",
            response,
        });
    }

    static returnSuccess(res: any, data: any) {
        console.log(`sending res status is: 200 for ${res.getHeader('reqID')}`)
        res.status(200);
        res.json(data);
    }

    static returnFail(res: any, data: any) {
        console.log(`sending res status is: 500 for ${res.getHeader('reqID')}`)
        res.status(500);
        let responseObject: object = {
            error: data.toString(),
            message: data.message
        }

        res.json({
            status: false,
            message: responseObject
        });
    }
}

export default HTTPUtils;