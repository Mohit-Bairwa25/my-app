const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');


const JWT_SECRET = 'Harryisagoodb$oy';

// ROUTE 1 : Create a User using: POST "/api/auth/createuser", Doesn't require Auth(Log In)
router.post('/createuser',[
    body('name','Enter a Valid Name of Minimun Length 3').isLength({min:3}),
    body('email','Enter a Valid Email').isEmail(),
    body('password','Enter a Valid Password of Minimun Length 5').isLength({min:5}),
],  async(req, res)=>{
    let success = false;
    // Error handeling
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    // Check if User exsist already
    try{
        let user = await User.findOne({email: req.body.email});
        console.log(user)
        if(user){
            return res.status(400).json({success, error: "User with this Email already Exist"})
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        //Create a new User
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        })
        const data = {
            user:{
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({success, authToken})
    } 
    catch (error){
        console.error(error.message)
        res.status(500).send("Internal Server Error");
    }

})

// ROUTE 2 : Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login',[
        body('email','Enter a Valid Email').isEmail(),
        body('password','Password Cannot be Blank').exists(),
    ],  async(req, res)=>{
        let success = false;
                // Error handeling, It returns Bad Request & Errors
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
                }

                const {email, password} = req.body;

                try {
                    let user = await User.findOne({email});
                    if(!user){
                        success = false;
                        return res.status(400).json({success, error:"Entered Credentails are Wrong"});
                    }

                    const passwordCompare = await bcrypt.compare(password, user.password);
                    if(!passwordCompare){
                        success = false;
                        return res.status(400).json({success, error:"Entered Credentails are Wrong"})
                    }

                    const data = {
                        user:{
                            id: user.id
                        }
                    }
                    const authToken = jwt.sign(data, JWT_SECRET);
                    success = true;
                    res.json({ success, authToken})

                }
                catch (error){
                    console.error(error.message)
                    res.status(500).send("Internal Server Error");
                }
        }
)

// ROUTE 3 : Get Loggedin User Details using: POST "/api/auth/getuser". Login required

router.post('/getuser', fetchUser, async(req, res)=>{
        try {
            const userId = req.user.id;
            const user = await User.findById(userId).select("-password")
            res.send(user);
        }
        catch (error){
            console.error(error.message)
            res.status(500).send("Internal Server Error");
        }
    }
)

module.exports = router;