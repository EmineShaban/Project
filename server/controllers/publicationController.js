const router = require('express').Router()

// const { isAuth } = require('../middlewares/authMiddleware')
// const { isPublicationAuthor, preloadPublication } = require('../middlewares/publicationMiddleware')
const publicationServices = require('../services/publicationServices')
const { getErrorMessage } = require('../utils/errorHelper')

router.get('/', async (req, res) => {
    res.send('AAAAAA')

    // const publication = await publicationServices.getAll().lean()
    // res.render('publication', { publication })
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

    // const publication = await publicationServices.getAll().lean()
    // res.render('publication', { publication })
})
router.post('/create', async (req, res) => {
    res.send('The chamber of srcrets')

    // try {
    //     const createPublication = await publicationServices.create({ ...req.body})
    //     res.redirect('/publication')
        
    // } catch (error) {
    //     res.render('publication/create', { error: getErrorMessage(error) })
    // }
    
})

// router.get(
    //     '/:publicationID/share',
    //     isAuth,
    //     async(req, res) => {
        //        const publication =  await publicationServices.getOne(req.params.publicationID)
        //        publication.usersShared.push(req.user._id)
        //        await publication.save()
        //         res.redirect('/')
        //     })
        
        
        // router.get(
        //     '/:publicationID/details',
        //     async (req, res) => {
        //         const publication = await publicationServices.getOneDetailed(req.params.publicationID).lean()
        //         const isAuthor = publication.author._id == req.user?._id
        //         const isShared = publication.usersShared.includes(req.user._id)
        //             res.render('publication/details', { ...publication, isAuthor, isShared})
        //     })
        
        
        
        
        // router.get(
        //     '/:publicationID/edit',
        //     isAuth,
        //     preloadPublication,
        //     isPublicationAuthor,
        //     (req, res) => {
        //         res.render('publication/edit', { ...req.publication })
        //     })
        
        
        // router.post(
        //     '/:publicationID/edit',
        //     isAuth,
        //     preloadPublication,
        //     isPublicationAuthor,
        //     async (req, res) => {
        //         try {
        //             await publicationServices.update(req.params.publicationID, req.body)
        //             res.redirect(`/publication/${req.params.publicationID}/details`)
        //         } catch (error) {
        //             res.render('publication/edit', { ...req.body, error: getErrorMessage(error) })
        //         }
        //     })
        
        // router.get(
        //     '/:publicationID/delete',
        //     isAuth,
        //     preloadPublication,
        //     isPublicationAuthor,
        //     async(req, res) => {
        //         await publicationServices.delete(req.params.publicationID)
        //         res.redirect('/publication')
        //     })
        
        
        // router.get('/create', isAuth, (req, res) => {
        //     res.render('publication/create')
        // })
module.exports = router