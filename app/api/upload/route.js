import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(req) {
    try {
        const formData = await req.formData();
        const file = formData.get('banner');
        if (!file) {
            return NextResponse.json(
                { error: 'No file uploaded' },
                { status: 400 },
            );
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const client = await clientPromise;
        const db = client.db(process.env.DATABASE);
        const imageBuffer = buffer.toString('base64');

        // Check if a banner already exists
        const existingBanner = await db.collection('banners').findOne({});

        let result;
        if (existingBanner) {
            // Replace the existing banner
            result = await db.collection('banners').updateOne(
                { _id: existingBanner._id },
                {
                    $set: {
                        image: imageBuffer,
                        contentType: file.type,
                        updatedAt: new Date(),
                    },
                },
            );
        } else {
            // Insert new if none exists
            result = await db.collection('banners').insertOne({
                image: imageBuffer,
                contentType: file.type,
                createdAt: new Date(),
            });
        }

        return NextResponse.json(
            {
                message: existingBanner
                    ? 'Banner replaced successfully'
                    : 'Banner uploaded successfully',
                id: existingBanner ? existingBanner._id : result.insertedId,
            },
            { status: 201 },
        );
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.DATABASE);
        const banner = await db
            .collection('banners')
            .findOne({}, { sort: { _id: -1 } });

        if (!banner) {
            return NextResponse.json(
                { message: 'No Banner Found' },
                { status: 404 },
            );
        }

        const imageBuffer = Buffer.from(banner.image, 'base64');
        const response = new NextResponse(imageBuffer);

        response.headers.set('Content-Type', banner.contentType);

        return response;
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
