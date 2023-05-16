const express = require("express");
const { auth } = require("express-oauth2-jwt-bearer");
const authConfig = require("../../front-end/src/auth_config");
const cors = require("cors");
const { join } = require("path");
const app = express();
const appPort = process.env.SERVER_PORT || 3001;
const appOrigin = authConfig.appOrigin || `http://localhost:3000`;
const port = process.env.SERVER_PORT || 3001;
app.use(cors({
    origin: authConfig.appOrigin,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
if (!authConfig.domain ||
    !authConfig.audience ||
    authConfig.audience === "YOUR_API_IDENTIFIER") {
    console.log("Exiting: Please make sure that auth_config.json is in place and populated with valid domain and audience values");
    process.exit();
}
const checkJwt = auth({
    audience: authConfig.audience,
    issuerBaseURL: `https://${authConfig.domain}/`,
    algorithms: ["RS256"],
});
app.get("/api/external", checkJwt, (req, res) => {
    res.send({
        msg: "Your access token was successfully validated!",
    });
});
app.get("/api/public", (req, res) => {
    res.send({
        msg: "Public route",
    });
});
app.use(express.static(join(__dirname, "build")));
app.listen(port, () => console.log(`API Server listening on port ${port}`));
//# sourceMappingURL=api-server.js.map