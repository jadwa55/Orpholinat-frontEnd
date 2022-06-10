const {Orpholin} = require("../config/migration");


exports.createOrpholin = async (req, res) => {
    try {
      
        const orpholin = await Orpholin.create({
          name: req.body.name,
          prenom: req.body.prenom,
          sexe: req.body.sexe,
          age: req.body.age,
          icon: req.file.path,
          situation: req.body.situation,
          OrpholinatId: req.body.OrpholinatId 
        });
        console.log(req.body.OrpholinatId);
        console.log("done");
    
        res.status(201).json({
          orpholin: orpholin,
        });
      } catch (error) {
        res.status(400).send(error);
        console.log(error);
      }
    };


exports.findOrpholin = async (req, res) => {
    try {
    
        const orpholin = await Orpholin.findAll();
    
        if (!orpholin) {
            res.status(401).json({
            message: "orpholin not found",
            });
        } else {
            res.status(201).json({
            message: "success",
            orpholin:orpholin
            });
        }
        } catch (error) {
        res.status(401).send(error);
        }
    
};

exports.updateOrpholin = async (req,res)=>{
    try {
        const id = req.params.id
        const data = req.body

        const orpholin = await Orpholin.update(data,{where: {id: id}})

        res.status(200).json({
            message: 'orpholin infos updated successfully',
            orpholin: orpholin
        })
    } catch (error) {
        res.send(error)
        
    }
}

exports.deleteOrpholin = async (req,res)=>{
    try {
        const id = req.params.id

        const orpholin = await Orpholin.destroy({where: {id: id}})

        res.status(200).json({
            message: 'orpholin deleted successfully'
        })
    } catch (error) {
        res.send(error)
        
    }
}
