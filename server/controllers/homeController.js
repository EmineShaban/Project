const router = require('express').Router()
// const { isAuth } = require('../middlewares/authMiddleware')
// const publicationServices = require('../services/meetingsServices')

router.get('/', (req, res) => {
    res.send('The chamber of srcrets')
})

router.get('/charity', async (req, res) => {
    res.send([
        {
          "_id": "1",
          "nameOfFond": "United24",
          "imageURL": "https://u24.gov.ua/assets/img/meta/og-20220504.jpg",
          "description": "akjnegrknjdnknjgrkjnkrnjkkrnknjnjnjnjkrj",
          "bankAccountNumber": "7378737438773473837383"
        },
        {
          "_id": "2",
          "nameOfFond": "Bulgaria",
          "imageURL": "http://www.globalr2p.org/wp-content/uploads/2022/04/Ukraine_Web-1.png",
          "description": "nnntntntntn",
          "bankAccountNumber": "2222"
        },
        {
          "_id": "3",
          "nameOfFond": "Africa",
          "imageURL": "http://www.globalr2p.org/wp-content/uploads/2022/04/Ukraine_Web-1.png",
          "description": "dndnndnd",
          "bankAccountNumber": "484484848"
        }
        ])
})

module.exports = router