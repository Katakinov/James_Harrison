const {Router} = require('express')
//const config = require('config')
const DonationData = require('../models/donationData')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/generate', auth, async (req, res) => {
    try {
        const {donationType} = req.body

        const existing = await PersonalData.findOne({ donationType })

        if (existing) {
            return res.json({ donation: existing })
        }

        const donation = new PersonalData({
            donationType, DonationDate, donor: req.user.userId
        })

        await donation.save()

        res.status(201).json({ donation })

    } catch (e) {
        res.status(500).json({message: "Что то пошло не так, попробуйте снова"})
    }
})

router.get('/', auth, async (req, res) => {
    try {
        const donations = await DonationData.find({ donor: req.user.userId }) // ????
        res.json(donations)
    } catch (e) {
        res.status(500).json({message: "Что то пошло не так, попробуйте снова"})
    }
})

router.get('/:id', auth, async (req, res) => {
    try {
        const donation = await DonationData.findById( req.params.id ) // ????
        res.json(donation)
    } catch (e) {
        res.status(500).json({message: "Что то пошло не так, попробуйте снова"})
    }
})

module.exports = router