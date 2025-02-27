import connectDB from "@/app/lib/connectDB";
import { ObjectId } from "mongodb";

export async function GET(req, {params}) {
    const { bookID } = await params
    const res = await connectDB("books").findOne({_id : new ObjectId(bookID)})
    return new Response(  JSON.stringify( res ), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
  }