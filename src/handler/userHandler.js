import { getUserProfile } from '../models/userModel.js'

async function userName(req,res,next) {
    try{
        const authHeader = req.headers.authorization
        if (!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({
                message: "Authorization Required"
            });
        }
        const token = authHeader.split(" ")[1];
        const decoded = validateToken(token);
        if (!decoded) {
            return res.status(401).json({
                message: "Invalid or expired token"
            });
        }
        const userId = decoded.user_id;
        const user = await getUserProfile(userId);
        if(!user){
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            data: user
        });

    }catch{
        res.status(401).json({
            message: "Authorization failed or token expired"
        });
    }
}

export default userName;