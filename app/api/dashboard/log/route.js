import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { UAParser } from 'ua-parser-js';

export async function POST(req) {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.DATABASE);
        const logsCollection = db.collection(process.env.LOG_COLLECTION);

        const { userAgent, ip, country, page, timestamp } = await req.json();
        const parser = new UAParser(userAgent);
        const result = parser.getResult();

        const userData = {
            page,
            ip,
            country,
            browser: result.browser.name || 'Unknown',
            os: result.os.name || 'Unknown',
            device: result.device.type || 'Desktop',
            userAgent,
            timestamp,
        };

        await logsCollection.insertOne(userData);

        return NextResponse.json({ message: 'Log saved' }, { status: 200 });
    } catch (error) {
        console.error('Error in logging route:', error);
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 },
        );
    }
}
