exports.current_user=(req,res)=>{
    return res.status(200).send({
        message:"Current User data fetched successfully",
        // data:{}
        data: req.user

    });
}
 