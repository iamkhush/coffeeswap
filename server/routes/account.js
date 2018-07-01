import express from 'express';
import Account from '../models/account';


const router = express.Router();

const UserNameRegex = /^[A-Za-z0-9]+$/;

const requiresLogin = (req, res, next) => {
    // console.log(req, res, 'ssss');
    if (req.session === undefined || req.session.loginInfo === undefined) {
        // console.log(req, res, 'iininii');
        return res.status(401).json({
            error: 1
        });
    } else {
        next()
    }
};

/*
    ACCOUNT SIGNUP: POST /api/account/signup
    BODY SAMPLE: { "username": "test", "password": "test" }
    ERROR CODES:
        1: BAD USERNAME
        2: BAD PASSWORD
        3: USERNAME EXISTS
*/
router.post('/signup', (req, res) => {
    // CHECK USERNAME FORMAT

    if(!UserNameRegex.test(req.body.username)) {
        return res.status(400).json({
            error: "BAD USERNAME",
            code: 1
        });
    }

    // CHECK PASS LENGTH
    if(req.body.password.length < 4 || typeof req.body.password !== "string") {
        return res.status(400).json({
            error: "BAD PASSWORD",
            code: 2
        });
    }

    // CHECK USER EXISTANCE
    Account.findOne({ username: req.body.username }, (err, exists) => {
        if (err) throw err;
        if(exists){
            return res.status(409).json({
                error: "USERNAME EXISTS",
                code: 3
            });
        }

        // CREATE ACCOUNT
        let account = new Account({
            username: req.body.username,
            password: req.body.password
        });

        account.password = account.generateHash(account.password);

        // SAVE IN THE DATABASE
        account.save( err => {
            if(err) throw err;
            return res.json({ success: true });
        });

    });
});

/*
    ACCOUNT SIGNIN: POST /api/account/signin
    BODY SAMPLE: { "username": "test", "password": "test" }
    ERROR CODES:
        1: LOGIN FAILED
*/
router.post('/signin', (req, res) => {
    
        if(typeof req.body.password !== "string") {
            return res.status(401).json({
                error: "LOGIN FAILED",
                code: 1
            });
        }
    
        // FIND THE USER BY USERNAME
        Account.findOne({ username: req.body.username}, (err, account) => {
            if(err) throw err;
    
            // CHECK ACCOUNT EXISTANCY
            if(!account) {
                return res.status(401).json({
                    error: "LOGIN FAILED",
                    code: 1
                });
            }
    
            // CHECK WHETHER THE PASSWORD IS VALID
            if(!account.validateHash(Account.generateHash(req.body.password))) {
                return res.status(401).json({
                    error: "LOGIN FAILED",
                    code: 1
                });
            }
    
            // ALTER SESSION
            let session = req.session;
            session.loginInfo = {
                _id: account._id,
                username: account.username
            };
    
            // RETURN SUCCESS
            return res.json({
                success: true
            });
        });
    });

/*
    GET CURRENT USER INFO GET /api/account/getInfo
*/
router.get('/getinfo', requiresLogin, (req, res) => {
    res.json({ info: req.session.loginInfo });
});

/*
    LOGOUT: POST /api/account/logout
*/
router.post('/logout', (req, res) => {
    req.session.destroy(err => { if(err) throw err; });
    return res.json({ sucess: true });
});


/*
    ACCOUNT SIGNIN: POST /api/account/getprofileinfo
    BODY SAMPLE: { "username": "test", "password": "test" }
    ERROR CODES:
        1: BAD USERNAME
        2. USER NOT EXISTS
*/
router.post('/getprofileinfo', requiresLogin, (req, res) => {
    let username = req.session.loginInfo.username || '';

    if(!UserNameRegex.test(username)) {
        return res.status(400).json({
            error: "BAD USERNAME",
            code: 1
        });
    }    
    console.log('profileinfo:'+req.session.loginInfo.username);
    var cuser = req.session.loginInfo.username;
    console.log('cuser'+ cuser);
    Account.findOne({ username: cuser}, (err, exists) => {
        if (err) throw err;
        if(!exists){
            return res.status(409).json({
                error: "USER NOT EXISTS",
                code: 2
            });
        }

        var userinfo = {
            plan: exists.plan,
            address: exists.address
        }
        
        return res.json({ success: true, info: userinfo });
        

    });
});

router.post('/update', requiresLogin, (req, res) => {
    // CHECK USER EXISTANCE
    Account.findOne({ username: req.body.username }, (err, exists) => {
        if (err) throw err;
        if(!exists){
            return res.status(409).json({
                error: "USER NOT EXISTS",
                code: 3
            });
        }
        exists.plan = req.body.plan;
        exists.address = req.body.address;
        // SAVE IN THE DATABASE
        exists.save( err => {
            if(err) throw err;
            return res.json({ success: true });
        });

    });
});

/*
    ACCOUNT SIGNIN: POST /api/account/checkusername
    ERROR CODES:
        1: Not logged in
*/
router.post('/checkusername', (req, res) => {
    Account.findOne({ username: req.body.username }, (err, exists) => {
        if (err) throw err;
        return res.json({is_unique: !exists});
    })
});


/*
    ACCOUNT SIGNIN: POST /api/account/checkAndSetMatch
    ERROR CODES:
        1: Not logged in
*/
router.get('/checkAndSetMatch', requiresLogin, (req, res) => {
    Account.findOne({username: req.session.loginInfo.username}, (err, account) => {
        if (err) res.status(500).send(err);
        if (account.match) return res.send();
        // if not match, then set match
        const ag = Account.aggregate([
            {"$match": { 
                "$or": [
                    { "roastType": account.roastType },
                    { "roastByDate": account.roastByDate },
                    { "roastLocation": account.roastLocation }
                ],
                "_id": {"$ne": account._id}
            }},
            {"$addFields": {"rank": {
                "$sum": [
                    {"$cond": [{ "$eq": ["$roastByDate", account.roastByDate]}, 3, 0]},
                    {"$cond": [{ "$eq": ["$roastType", account.roastType]}, 2, 0]},
                    {"$cond": [{ "$eq": ["$roastLocation", account.roastLocation]}, 1, 0]},
                ]
            }}},
            {"$sort": { "rank": -1 }}
        ]).then(allMatches => {
            console.log('allMatches',allMatches[0]['_id']);
            account.update({match: allMatches[0]['_id']}, () => {
                return res.send();
            })
        });
    });
});

export default router;