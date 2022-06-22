const {User} = require("../Config/migration");


exports.createUser = async (req, res) => {
    try {
      
        const users = await User.create({
          name: req.body.name,
          email : req.body.email,
          password : req.body.password,
          number : req.body.number,
        });
        console.log("done");
    
        res.status(201).json({
          users: users,
        });
      } catch (error) {
        res.status(400).send(error);
        console.log(error);
      }
    };


exports.findUser = async (req, res) => {
    try {
    
        const users = await User.findAll();
    
        if (!users) {
          res.status(401).json({
            message: "users not found",
          });
        } else {
          res.status(201).json({
            message: "success",
            users:users
          });
        }
      } catch (error) {
        res.status(401).send(error);
      }
    
};
exports.updateUser = async (req,res)=>{
    try {
        const id = req.params.id
        const data = req.body

        const users = await User.update(data,{where: {id: id}})

        res.status(200).json({
            message: 'user updated successfully',
            users:users
        })
    } catch (error) {
        res.send(error)
        
    }
}

exports.roleUser = async (req, res) => {
    const confirmer = await User.update(
      {
        role: 'comptable'
    },
    {
        where: {
            id: req.params.id
        }
    }
    );
    res.status(200).send({message: 'confirmation successfully ',confirmer});

  };

exports.deleteUser = async (req,res)=>{
    try {
        const id = req.params.id

        const users= await User.destroy({where: {id: id}})

        res.status(200).json({
            message: 'user deleted successfully'
        })
    } catch (error) {
        res.send(error)
        
    }
}