import React, { useContext } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import { MainHeader } from "../components/nav/Mainheader";
import { MainSidebar } from "../components/nav/Mainsidebar";
import BContainer from "../components/base/BContainer";
import { AuthContext } from "../context/AuthContext";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { getAPIClient } from "../data/axios";
import { useSession } from "next-auth/react";
import ContentHeader from "../components/contentHeader";
import Router from "next/router";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { user } = useContext(AuthContext);
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <main className="content">
        <MainHeader />
        <MainSidebar />
        <div className="content-wrapper">
          <BContainer fluid>
            <h2>Olá</h2>
          </BContainer>
        </div>
      </main>
    );
  } else {
    return <Link href="/api/auth/signin">Sign in</Link>;
  }
}
