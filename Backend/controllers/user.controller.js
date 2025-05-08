const User = require("../model/User")

exports.getAllUsers= async(req,res)=>{
    try {
        const listUsers = await User.find()
        res
        .status(200)
        .json({
            success:{msg:"la liste de tous les utilisateurs"},listUsers
        })
    } catch (error) {
        res
        .status(400)
        .json({
            errors:{msg:"je ne retrouve  pas les utilisateur"}})
    }
}

exports.deleteUser = async(req,res) => {
    try {
        const {id} = req.params;
        const userToDelete = await User.findByIdAndDelete(id);

        if(!userToDelete){
            return res.status(400).json({
                errors:{msg:"Cet utilisateur n'existe pas!"}
            })
        }
        res.status(200).json({
            success:{msg:"supression de l'utilisateur avec succées !"},userToDelete,
        })
    } catch (error) {
        res.status(400).json({
            errors:{msg:"Echec de suppression de l'utilisateur !"}
        })
        
    }
};

exports.getOneUser = async (req,res)=>{

    try {
        const {id} = req.params;
        const userToGet = await User.findById(id)

        if (!userToGet){
            return res.status(400).json({errors:{msg:"Cet utilisateur n'existe pas!"}});
        }
        res.status(200).json({success:{msg:"l'utilisateur recherché est :"},userToGet,
        })

        
        
    } catch (error) {
        
    }
}