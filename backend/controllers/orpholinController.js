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