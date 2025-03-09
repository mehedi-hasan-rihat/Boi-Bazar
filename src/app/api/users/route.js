import connectDB from "@/app/lib/connectDB";

export async function GET() {
    try {
      const users = await connectDB("users").find().toArray();
      return Response.json(users, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
  }