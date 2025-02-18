import multer from 'multer';
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

const upload = multer({ storage: multer.memoryStorage() });

const parseForm = (req) =>
    new Promise((resolve, reject) => {
        upload.single('banner')(req, {}, (err) => {
            if (err){ return reject(err); }
            resolve(req.file);
        });
    });

export async function POST(req) {
    try {
        const file = await parseForm(req);
        if (!file){
            return NextResponse.json(
                { error: 'No file uploaded' },
                { status: 400 },
            );
        }

        const client = await clientPromise;
        const db = client.db(process.env.DATABASE);
        const imageBuffer = file.buffer.toString('base64');

        const result = await db.collection('banners').insertOne({
            image: imageBuffer,
            contentType: file.mimetype,
        });

        return NextResponse.json(
            { message: 'Uploaded successfully', id: result.insertedId },
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
