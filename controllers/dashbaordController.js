const requireAuth = require("../middleware/requireAuth")

const getDashboard = async (req,res) =>{
    res.render('admin/dashboard')
}

module.exports = getDashboard