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
    const id = new ObjectId(body.id)
    await client.db("test").collection("greetings").updateOne({ _id: id }, { $set: { greeting: body.greeting } });
    return Response.json({ message: "successfully updated the document" })
}

export async function DELETE(request: Request) {
    const { id } = await request.json();
    const objId = new ObjectId(id as string)
    const client = await connect;
    // Logic to delete the greeting from the database
    const result = await client.db("test").collection("greetings").deleteOne({ _id: objId })
    if (result) {
        return Response.json(200)
    } else {
        return Response.json(500)
    }
};
