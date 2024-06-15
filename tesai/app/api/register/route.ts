import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(
    request: Request
) {
    const body = await request.json();
    const {
        email,
        name,
        password
    } = body;



    const hashedPassword = await bcrypt.hash(password, 12);
    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        }
    });
    if(existingUser){
        return {error: "Email already in use!"};
    }

    const user = await prisma.user.create({
        data: {
            email,
            name,
            hashedPassword
        }
    });
    //Email confirmation (will be...)
    // const verificationToken = await generateVerificationToken(email);
    // await sendVerificationEmail(verificationToken.email, verificationToken.token );

    return NextResponse.json(user);
}