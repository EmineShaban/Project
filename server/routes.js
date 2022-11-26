const router = require('express').Router()

const homeController = require('./controllers/homeController')
// const authController = require('./controllers/authController')
const meetingsController = require('./controllers/meetingsController')


router.use(homeController)
// router.use('/auth', authController)
router.use('/meeting', meetingsController)


module.exports = router