const jwt = require("jsonwebtoken");
const { invalid } = require("moment/moment");

const checkToken = function (req, res, next) {
  try {
    let token = req.headers["x-Auth-Token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token)
      return res.status(400).send({
        msg: "the req is missing a mandatory header",
      });

    let verifyToken = jwt.verify(token, "assignment-secret-key");
    console.log(verifyToken);
    if (!verifyToken) return res.status(401).send({ msg: "invalid token" });
    //401 401 semantically means "unauthorised"

    let idFromParam = req.params.userId;
    let idFromToken = verifyToken.userId;
    if (idFromParam != idFromToken)
      return res.status(403).send({ msg: "user is not authorised" });
      //403 user not having the necessary permissions for a resource
  } catch (error) {
    res.status(500).send({ error: error.message });
  }

  next();
};

//+ Please note that you have to also write the logic for authorisation now so that a logged in user can modify or fetch ONLY their own data.

module.exports.checkToken = checkToken;
