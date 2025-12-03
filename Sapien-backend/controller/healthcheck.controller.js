import asyncHandler from "../utilities/async-handler.js"
import ApiResponse from "../Api-Response.js";
const healthCheck = asyncHandler(async(req,res) => {
    res.status(200).json(
new ApiResponse(
    {informarion:"It is a healthcheck middleware"},
    200,
    {messag:"it is working just fine yk yess"},
))

    

})

export default healthCheck;