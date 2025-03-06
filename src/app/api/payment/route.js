import connectDB from "@/app/lib/connectDB";

export async function GET() {
  try {
    const books = await connectDB("payment").find().toArray();
    return Response.json(books, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
