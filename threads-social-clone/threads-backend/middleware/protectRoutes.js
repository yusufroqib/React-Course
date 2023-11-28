import jwt from 'jsonwebtoken';



const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        if(!token) return res.status(401).json({message: 'Unauthorized'})
    } catch (error) {
        res.status(500).json({message: error.message})
        console.log('Error while signing up user: ', error.message );
    }
}

export default protectRoute