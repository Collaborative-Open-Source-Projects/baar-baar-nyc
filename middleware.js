import { NextResponse } from 'next/server';

export function middleware(req) {
    const page = req.nextUrl.pathname;
    const userAgent = req.headers.get('user-agent') || 'Unknown';
    const ip = req.headers.get('x-forwarded-for') || req.ip || 'Unknown';

    const logData = {
        userAgent,
        ip,
        page,
        timestamp: new Date().toISOString(),
    };

    fetch(`${process.env.BASE_URL}/api/dashboard/log`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(logData),
    }).catch(console.error);

    console.log(logData);

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/',
        '/about',
        '/food',
        '/drinks',
        '/info',
        '/press',
        '/private-events',
    ],
};
