import jwt from "jsonwebtoken";

function generateToken(user) {
    return jwt.sign(
        {
            userId: user.id,
            email: user.email,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    );
}

function validateToken(token) {
    try {
        const decoder = jwt.verify(
            token,
            process.env.JWT_SECRET
        );
        return decoder;
    } catch (error) {
        return null;
    }
}

export { validateToken, generateToken };