import connect from '@/utils/startMongo'
import { ObjectId } from 'mongodb';

export async function GET(request: Request) {
    const client = await connect
    const cursor = await client.db("test").collection("greetings").find();
    const greetings = await cursor.toArray()
    return Response.json(greetings)
}


export async function POST(request: Request) {
    const client = await connect;
    const body = await request.json()
    await client.db("test").collection("greetings").insertOne({ greeting: body.greeting });
    return Response.json({ message: "successfully updated the document" })
}

export async function PUT(request: Request) {
    const client = await connect;
    const body = await request.json()
    const id = new ObjectId("67851f5b3e38b172a1c52e76")
    await client.db("test").collection("greetings").updateOne({ _id: id }, { greeting: "this greeting has been updated" });
    return Response.json({ message: "successfully updated the document" })
}