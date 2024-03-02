import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        let cookie = request.cookies.get('token')?.value;

        if (!cookie) {
            throw new Error('Token not found in cookies');
        }

        const payload = await jwt.verify(cookie, process.env.JWT_SECRET_KEY!);

        return NextResponse.json({
            payload,
        });
    } catch (error) {
        return NextResponse.json({
            error: error, // Make sure to provide a meaningful error message
        });
    }
}
