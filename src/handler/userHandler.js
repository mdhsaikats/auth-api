import { getUserProfile } from '../models/userModel.js'

async function userName(req, res, next) {
    try {
        const userId = req.user.userId;

        const user = await getUserProfile(userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            data: user
        });

    } catch (error) {
        next(error);
    }
}

export default userName;
