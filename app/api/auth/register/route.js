import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

export async function POST(req) {
    try {
        const { email, password } = await req.json();
        const client = await clientPromise;
        const db = client.db(process.env.DATABASE);
        const usersCollection = db.collection(process.env.USER_COLLECTION);

        // Check if user exists
        const existingUser = await usersCollection.findOne({ email });
        if (existingUser) {
            return NextResponse.json(
                { message: 'User already exists' },
                { status: 400 },
            );
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user in MongoDB
        await usersCollection.insertOne({
            email,
            password: hashedPassword,
            test: password,
        });

        return NextResponse.json(
            { message: 'User registered successfully' },
            { status: 201 },
        );
    } catch (error) {
        console.error('Error in Register route: ', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 },
        );
    }
}
