
const { default: axios } = require('axios');
const Express = require('express')

const PORT = 3000;
const baseURL = 'https://api.github.com/users';
const app = Express();

let user = {
    profile: '',
    followers: ''
}
async function fetchUser(usernmae) {
    try {
        const res = await axios.get(`${baseURL}/${usernmae}`)
        user.profile = res.data.url;
        user.followers = res.data.followers;
        return user;
    } catch (e) {
        console.log(e.message)
    }
}

app.get('/user', async (req, res) => {
    req = { username: "defunkt" }
    let fuser = await fetchUser(req.username)
    res.send(fuser)
})

app.listen(PORT)
