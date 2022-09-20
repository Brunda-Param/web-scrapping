import express from "express"
import Controllers from "./controllers";
import ServerConfig from "./config.json"

const PORT =ServerConfig.port ;
const app = express();


app.get("/getData",Controllers.getMarketData);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
