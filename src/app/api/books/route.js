import connectDB from "@/app/lib/connectDB";

export async function GET() {
  try {
    const books = await connectDB("books").find().toArray();
    return Response.json(books, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const text = await request.json()
    console.log(text);
    const response = await connectDB("books").insertOne(text)
    return Response.json(response, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
