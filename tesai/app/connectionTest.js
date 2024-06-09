const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    try {
        await prisma.$connect();
        console.log('Connected to the database!');

        // Test creating a user
        const user = await prisma.user.create({
            data: {
                email: 'test@example.com',
                name: 'Test User',
            },
        });
        console.log('User created:', user);
    } catch (error) {
        console.error('Error connecting to the database:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
