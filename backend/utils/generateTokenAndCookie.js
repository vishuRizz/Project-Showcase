import jwt from 'jsonwebtoken'

export const generateTokenAndSetCookie = (res,userId) =>{
    const token = jwt.sign({userId},process.env.JWT_KEY,{
        expiresIn:"7d",
    })

    res.cookie("token",token,{
        httpOnly:true,
        sameSite:"strict",
        maxAdge:7*24*60*60*1000
    });

    return token;
}