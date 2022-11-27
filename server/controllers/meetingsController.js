const router = require('express').Router()

// const { isAuth } = require('../middlewares/authMiddleware')
// const { isPublicationAuthor, preloadPublication } = require('../middlewares/publicationMiddleware')
const meetingsServices = require('../services/meetingsServices')
const { getErrorMessage } = require('../utils/errorHelper')

router.get('/', async (req, res) => {
    await meetingsServices
        .getAll()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });

    // res.render('meeting', { meeting })


    //     const title = req.query.title;
    //     var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    //     Tutorial.find(condition)
    //       .then(data => {
    //         res.send(data);
    //       .catch(err => {
    //         res.status(500).send({
    //           message:
    //             err.message || "Some error occurred while retrieving tutorials."
    //         });
    //       });
    //       })
    //   };

})

router.post('/create', async (req, res) => {
    // res.send('The chamber of srcrets')
// console.log('aa')
    try {
        const createPublication = await meetingsServices.create({ ...req.body })
        res.redirect('/')

    } catch (error) {
        res.render('meeting/create', { error: getErrorMessage(error) })
    }


})
// router.get('/allMeetings', async (req, res) => {
//     // res.send('AAAAAA')

//     const meeting = await meetingsServices.getAll().lean()
//     res.render('meeting', { meeting })
// })
// router.get(
//     '/:publicationID/share',
//     isAuth,
//     async(req, res) => {
//        const publication =  await meetingsServices.getOne(req.params.publicationID)
//        publication.usersShared.push(req.user._id)
//        await publication.save()
//         res.redirect('/')
//     })


// router.get(
//     '/:publicationID/details',
//     async (req, res) => {
//         const publication = await meetingsServices.getOneDetailed(req.params.publicationID).lean()
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
//             await meetingsServices.update(req.params.publicationID, req.body)
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
//         await meetingsServices.delete(req.params.publicationID)
//         res.redirect('/publication')
//     })


// router.get('/create', isAuth, (req, res) => {
//     res.render('publication/create')
// })
module.exports = router