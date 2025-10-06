
"use client";
import Header from "@/app/Components/Header";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingScreen from "@/app/Components/LoadingScreen";
import AuthGuard from "@/app/Components/AuthGuard";

export default function PaginaUsuario() {
    const [loading, setLoading] = useState(true);
    const { id: usuarioId } = useParams();
    const links = [
        { label: "Inicio", href: `/inicioposlogin/${usuarioId}` },
        { label: "Perfil", href: `/perfil/${usuarioId}` },
        { label: "Times", href: `/times/${usuarioId}` },
        { label: "Loja", href: `/loja/${usuarioId}` },
        { label: "Copas PAB", href: "/copasPab" },
        { label: "Sair", href: "/" }
    ];
    useEffect(() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 500); // Simula carregamento
    }, []);
    if (loading) {
        return <LoadingScreen />;
    }
    return (
        <AuthGuard>
            <section className="w-screen h-screen bg-center bg-no-repeat bg-cover bg-[url(/background2.png)]">
                <Header links={links} bgClass="bg-transparent" src="/Logo-branca.png" color="text-white" />
            </section>
        </AuthGuard>
    );
}