"use client";
import Header from "@/app/Components/Header";
import React from "react";

export default function PaginaUsuario({ params }) {
    const { id: usuarioId } = React.use(params);
    const links = [
        { label: "Inicio", href: `/inicioposlogin/${usuarioId}` },
        { label: "Perfil", href: "/perfil" },
        { label: "Times", href: `/times/${usuarioId}` },
        { label: "Copas PAB", href: "/copasPab" },
        { label: "Sair", href: "/" }
    ];
    return (
        <Header links={links} bgClass="bg-black" src="/Logo-branca.png" color="text-white" />
    );
}