"use client";
import Header from "@/app/Components/Header";
import { useParams } from "next/navigation";

export default function PaginaUsuario() {
    const { id: usuarioId } = useParams();
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