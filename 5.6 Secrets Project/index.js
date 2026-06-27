// HINTS:
// 1. Import express and axios

import express from "express";
import * as bodyParser from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";
// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.
const yourBearerToken = "ed3f6079-f82a-4841-86f8-147e0e096745";
const config = {
    headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))
// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", async (req, res)=>{
    const {data} = await axios.get(API_URL+"/random")
    console.log(data)
    return res.render("index.ejs", {secret: data.secret, user: data.username})
})
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
