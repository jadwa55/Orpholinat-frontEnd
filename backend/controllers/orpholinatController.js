const Orpholinat = require('../models/OrpholinatModel')
const multer = require('multer')
const { response } = require('express')


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


exports.updateOrpholinat = async (req,res)=>{
    try {
        const id = req.params.id
        const data = req.body

        const orpholinat = await Orpholinat.update(data,{where: {id: id}})

        res.status(200).json({
            message: 'orpholinat updated successfully',
            orpholinat: orpholinat
        })
    } catch (error) {
        res.send(error)
        
    }
}

exports.deleteOrpholinat = async (req,res)=>{
    try {
        const id = req.params.id

        const orpholinat = await Orpholinat.destroy({where: {id: id}})

        res.status(200).json({
            message: 'orpholinat deleted successfully'
        })
    } catch (error) {
        res.send(error)
        
    }
}

exports.getAllOrpholinat = async (req,res)=>{
    try {
        const orpholinat = await Orpholinat.findAll()

        if(orpholinat.length==0){
            return res.status(200).json({
                
                message: 'no orpholinat found'
            })
        }

        return res.status(200).json({
            message: 'success',
            orpholinat: orpholinat
        })

        
    } catch (error) {
        return res.json(error)
        
    }
    // return res.json('ba3bola')
}