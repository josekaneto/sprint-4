"use client";

import { useEffect } from "react";
import Header from "./Components/Header";


const links = [
  { label: "Login", href: "/user/login" },
  { label: "Cadastre-se", href: "/user/cadastro" },
  { label: "Copas PAB", href: "/copasPab" },
  { label: "Início", href: "/" }
];

export default function Home() {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <>
      <section className="w-screen h-screen bg-center bg-no-repeat bg-cover bg-[url(/background1.png)]">
        <Header links={links} bgClass="bg-transparent" src="/Logo-branca.png" color="text-white" />
      </section>
    </>
  );
}
