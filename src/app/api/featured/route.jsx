import connectDB from "@/app/lib/connectDB";

export async function GET() {
  try {
    const books = await connectDB("books").find().limit(6).toArray();
    return Response.json(books, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
