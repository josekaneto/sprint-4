
"use client";
import Header from "@/app/Components/Header";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PaginaUsuario() {
    const [loading, setLoading] = useState(true);
    const { id: usuarioId } = useParams();
    const links = [
        { label: "Inicio", href: `/inicioposlogin/${usuarioId}` },
        { label: "Perfil", href: `/perfil/${usuarioId}` },
        { label: "Times", href: `/times/${usuarioId}` },
        { label: "Copas PAB", href: "/copasPab" },
        { label: "Sair", href: "/" }
    ];

    const router = useRouter();
    useEffect(() => {
        setLoading(true);
    const usuarios = typeof window !== "undefined" ? localStorage.getItem("usuarios") : null;
    if (!usuarios) {
            router.replace("/");
            return;
        }
        setLoading(false);
    }, [router]);
    
    if (loading) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-pink-500"></div>
            </div>
        );
    }
    return (
        <Header links={links} bgClass="bg-black" src="/Logo-branca.png" color="text-white" />
    );
}