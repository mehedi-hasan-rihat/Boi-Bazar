import connectDB from "@/app/lib/connectDB";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log({ user, account, profile, email, credentials });
      console.log(account);
      if (account) {
        const { providerAccountId, provider } = account;
        const { email: user_email, image, name } = user;
        const userCollection = connectDB("users");
        const isExisted = await userCollection.findOne({ providerAccountId });
        console.log(isExisted);
        if (!isExisted) {
          const payload = {
            providerAccountId,
            provider,
            email: user_email,
            image,
            name,
            role : "user"
          };
          await userCollection.insertOne(payload);
        }
      }
      return true;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/logout",
  },
  // secret: process.env.NEXTAUTH_SECRET,
};
