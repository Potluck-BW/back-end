const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const Users = require("./users-model");
// const secrets = require("./secret")
router.get('/test', (req, res, next) => {
  res.status(201).json({success: true})
})
// router.post("/register", async (req, res, next) => {
  // try {
  //   const { username, password, firstname,  } = req.body;
  //   if (!req.body.username) {
  //     return res.status(400).json({
  //       errorMessage: "Username is Missing"
  //     });
  // }

    // const user = await Users.findBy({ username }).first();
    //
    // if (user) {
    //   return res.status(409).json({
    //     message: "Username is already taken"
    //   });
    // }
    // if (!req.body.password) {
    //     return res.status(400).json({
    //       errorMessage: "Password is Missing"
    //     });
    // }
    // if (!req.body.firstname) {
    //     return res.status(400).json({
    //       errorMessage: "First Name is Missing"
    //     });
    // }


    // const newUser = await Users.add({
    //   username,
    //   password: await bcrypt.hash(password, 4),
    //   firstname,
    //   location
    // });
    //
    // res.status(201).json(newUser);
  // } catch (err) {
  //   next(err);
  // }
// });

// router.post("/login", async (req, res, next) => {
//   try {
//     const { username, password } = req.body;
//     if (!req.body.username) {
//         return res.status(400).json({
//           errorMessage: "Username is Missing"
//         });
//     }
//     if (!req.body.password) {
//         return res.status(400).json({
//           errorMessage: "Password is Missing"
//         });
//     }
//     const user = await Users.findBy({ username }).first();
//
//     if (!user) {
//       return res.status(401).json({
//         message: "Invalid Credentials"
//       });
//     }
//     const passwordValid = await bcrypt.compare(password, user.password);
//
//     if (!passwordValid) {
//       return res.status(401).json({
//         errorMessage: "Invalid credentials"
//       });
//     }
//
//     const payload = {
//       userId: user.id,
//       username: user.username
//     };
//
//     const secret = secrets.jwtSecret;
//
//     res.json({
//       message: `Welcome ${user.username}!`,
//       token: jwt.sign(payload, secret)
//     });
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
