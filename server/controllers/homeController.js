// const { isAuth } = require('../middlewares/authMiddleware')

const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('The chamber of srcrets')
})

// router.get('/secret', isAuth, (req, res) => {
//     res.send('The chamber of srcrets')
// })


module.exports = router