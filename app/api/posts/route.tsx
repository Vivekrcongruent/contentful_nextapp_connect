//import { createConnection } from "@/node_modules/mysql2/index";

import { createConnection } from "../../lib/db.js";
import { NextResponse } from "@/node_modules/next/server";

export async function GET() {
    try {
        const db = await createConnection()
        const sql = 'select * from users'
        const [posts] = await db.query(sql)
        return NextResponse.json({posts: posts})
    } catch (error) {
        console.log(error);
        return NextResponse.json({error: error.message})
    }
}

