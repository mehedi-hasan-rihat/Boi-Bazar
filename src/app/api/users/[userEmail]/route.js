import connectDB from "@/app/lib/connectDB";

export async function GET(req, { params }) {
   
    try {
        const userEmail =  params.userEmail
        const user = await connectDB("users").findOne({email : userEmail});
        console.log(userEmail);
      return Response.json(user, { status: 200 });
    } catch (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
  }