import axios from "axios";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        userName: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const { userName, password } = credentials;
          const options = {
            method: "POST",
            url: "http://127.0.0.1:1337/api/auth/local",
            headers: { "Content-Type": "application/json" },
            data: { identifier: userName, password: password },
          };

          const userData = await axios
            .request(options)
            .then(function (response) {
              return response.data;
            })
            .catch(function (error) {
              console.error(error.message);
            });

          if (!userData) {
            console.log(userData);
            return null;
          }
          console.log(userData);
          return userData;
        } catch (e) {
          console.log(e);
          return null;
        }
      },
    }),
  ],
});
