const Express = require('express')

const app = Express();
const PORT = 5000;

function isAuth(req, res, next) {
    req.user = { auth: true } // will pass to /login route req.user={auth:false}
    // req.user={auth:false} // will redirect back to / route

    if (req.user.auth) {
        return next();
    } else {
        res.redirect('/')
    }
}
app.get('/', function (req, res) {
    res.send("in / route")
})
app.get('/login', isAuth, function (req, res) {  // Authenticated route 
    res.send("in the login route")
})

app.listen(PORT)