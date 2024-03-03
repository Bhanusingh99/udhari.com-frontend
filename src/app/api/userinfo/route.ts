import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        let cookie = request.cookies.get('token')?.value;

        if (!cookie) {
            throw new Error('Token not found in cookies');
        }


        return NextResponse.json({
            cookie,
        });
    } catch (error) {
        return NextResponse.json({
            error: error, // Make sure to provide a meaningful error message
        });
    }
}
