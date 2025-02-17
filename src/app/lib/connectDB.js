import  { MongoClient, ServerApiVersion } from 'mongodb';

function connectDB (collection){
    const uri = process.env.MONGO_URI
    // console.log(" URI : " , uri);
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });
      return client.db('Boibazar').collection(collection)
}

export default connectDB