// Post media

exports.postMedia = async (req, res) =>{
    const media = req.body;
    try {
        return res.send(media)
    } catch (error) {
        returmn 
    }
}

// get Media
exports.getAllMedia = async (req, res) =>{
    try {
        return res.send("This is from get All media")
    } catch (error) {
        returmn 
    }
}