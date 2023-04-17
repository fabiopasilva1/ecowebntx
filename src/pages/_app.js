import "../styles/globals.css";
import "tailwindcss/tailwind.css";
//import { AuthProvider } from "../context/AuthContext";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
