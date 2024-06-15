import{ v4 as uuid} from "uuid";
import {getVerificationTokenByEmail} from "@/app/verification/verification-token";
import prisma from "@/app/libs/prismadb";

export const generateVerificationToken = async (email:string)=> {
    const token = uuid();
    const expires = new Date(new Date(new Date().getTime() + 3600 * 1000));

    const existingToken = await getVerificationTokenByEmail(email);

    if(existingToken){
        await prisma.verificationToken.delete({
            where: {
                id: existingToken.id,
            },
        });
    }

    const verificationToken = await prisma.verificationToken.create({
        data: {
            email,
            token,
            expires,
        }
    });

    return verificationToken;
}