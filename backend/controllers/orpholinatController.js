const Orpholinat = require('../models/OrpholinatModel')
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/images')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
    })
exports.upload = multer({ storage: storage })

exports.addOrpholinat = async (req,res)=>{
    try {

        const {name,address,city,telephone,description,nombreOrpholin} = req.body
        const image = req.file.path
    
        const orpholinat = await Orpholinat.create({
            name: name,
            address: address,
            city: city,
            telephone: telephone,
            image: image,
            description: description,
            nombreOrpholin: nombreOrpholin
        })

        res.status(200).json({
            message: 'orpholinat created successfully',
            orpholinat: orpholinat
        })
        
    } catch (error) {
        res.send(error)
    }

}
