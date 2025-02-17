import connectDB from "@/app/lib/connectDB";

export async function GET() {
  try {
    const res = await connectDB('books').find().toArray(); 
    console.log(JSON.stringify({res}));
    return new Response( books, { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
