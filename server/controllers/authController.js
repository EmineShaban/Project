const router = require('express').Router()
// const { isAuth, isGueat } = require('../middlewares/authMiddleware')
const {getErrorMessage} = require('../utils/errorHelper')
const authServices = require('../services/authServices')

const { COOKIE_SESSION_NAME } = require('../constants')


// router.get('/login', (req, res) =>{
//     res.render('auth/login');
// })
router.post('/login', async (req, res) =>{
    try{
    const {email, password} = req.body
    // console.log(email)
    // console.log('-------------')

   const user = await authServices.login(email, password)
   const token = await authServices.createToken(user)

   res.cookie(COOKIE_SESSION_NAME, token, {httpOnly: true})
   res.send('DONE!')

    res.redirect('/')
} catch (error){
    return res.render('auth/login', {error: getErrorMessage(error)})

}
});


// router.get('/register', (req, res) =>{
//     res.render('auth/register')
// })

router.post('/register', async (req, res) =>{
    const { password, rePassword, ...userData} = req.body

    if (password !== rePassword) {
        return res.render('auth/register', {error: "Password missmatch!"})
    }


    try{
       const createdUser =  await authServices.create({password, ...userData})
       const token = await authServices.createToken(createdUser)
console.log(createdUser)
console.log(token)

       res.cookie(COOKIE_SESSION_NAME, token, {httpOnly: true})

        res.redirect('/')
    } catch (error){
        return res.render('auth/register', {error: getErrorMessage(error)})

    }

    
})
router.get('/logout', (req, res) =>{
    res.clearCookie(COOKIE_SESSION_NAME)
    res.redirect('/')
})





module.exports = router