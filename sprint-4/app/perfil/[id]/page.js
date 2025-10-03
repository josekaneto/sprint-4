"use client";

import Header from "@/app/Components/Header";
import MainContainer from "@/app/Components/MainContainer";
import SectionContainer from "@/app/Components/SectionContainer";
import Input from "@/app/Components/Input";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import VoltarButton from "@/app/Components/VoltarButton";

function Perfil() {
    const { id: usuarioId } = useParams();
    const router = useRouter();
    const links = [
        { label: "Inicio", href: `/inicioposlogin/${usuarioId}` },
        { label: "Perfil", href: `/perfil/${usuarioId}` },
        { label: "Times", href: `/times/${usuarioId}` },
        { label: "Copas PAB", href: `/copasPab/${usuarioId}` },
        { label: "Sair", href: "/" }
    ];
    const handleSave = (e) => {
        e.preventDefault();
        const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
        const idx = usuarios.findIndex(u => String(u.id) === String(usuarioId));
        if (idx !== -1) {
            usuarios[idx] = { ...usuarios[idx], ...usuario };
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
        }
    };
    // Campos do cadastro
    const [usuario, setUsuario] = useState({
        nomeCompleto: "",
        dataNascimento: "",
        email: "",
        telefone: "",
        nomeCamisa: "",
        numeroCamisa: "",
        altura: "",
        peso: "",
        posicao: "",
        pernaDominante: "",
        senha: ""
    });

    useEffect(() => {
        const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
        const user = usuarios.find(u => String(u.id) === String(usuarioId));
        if (user) {
            setUsuario({
                nomeCompleto: user.nomeCompleto || "",
                dataNascimento: user.dataNascimento || "",
                email: user.email || "",
                telefone: user.telefone || "",
                nomeCamisa: user.nomeCamisa || "",
                numeroCamisa: user.numeroCamisa || "",
                altura: user.altura || "",
                peso: user.peso || "",
                posicao: user.posicao || "",
                pernaDominante: user.pernaDominante || "",
                senha: user.senha || ""
            });
        }
    }, [usuarioId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario((prev) => ({ ...prev, [name]: value }));
    }

    return (
        <>
            <Header links={links} bgClass="bg-white" src="/Logo-preta.png" color="text-black" />
            <MainContainer>
                <SectionContainer tamanho={700}>
                    <div className="flex flex-col md:flex-row gap-8 w-full items-center justify-center">
                        <div className="flex flex-col items-center md:w-1/4 w-full min-w-[180px] gap-4 pt-2">
                            <div className="w-full flex justify-start">
                                <VoltarButton onClick={() => router.back()} />
                            </div>
                            <h2 className="text-3xl font-bold mb-5 font-title">Meu Perfil</h2>
                            <div className="w-full flex flex-col items-center gap-5">
                                <h2>Informações do seu perfil</h2>
                                <p>
                                    Time: <strong className="text-green font-black">Time Azul</strong>
                                </p>
                            </div>
                            <hr className="my-6 w-full border-gray-300 rounded-xl" />
                            <img src="/fotoDePerfil.png" alt="Foto de Perfil" className="w-32 h-32 rounded-full mb-4" />
                            <span className="text-xl font-semibold mb-2 w-full text-center">{usuario.nomeCompleto}</span>
                            <label className="mb-4">
                                <input type="file" className="border hidden border-gray-300 rounded px-4 py-2" />
                                <span className="block text-center mt-2">Selecionar a Imagem</span>
                            </label>
                            <button className="bg-[var(--color-purple)] text-white rounded-lg px-6 py-2 font-bold" onClick={handleSave}>Salvar</button>
                        </div>
                        <div className="flex flex-col md:text-left text-center gap-5 w-3/4">
                            <form className="w-full" action="">
                                <div className="flex flex-col gap-7 md:max-h-[620px] md:overflow-auto w-full">
                                    {Object.entries(usuario).map(([key, value]) => {
                                        let label = "";
                                        let type = "text";
                                        switch (key) {
                                            case "nomeCompleto": label = "Nome completo"; break;
                                            case "dataNascimento": label = "Data de nascimento"; type = "date"; break;
                                            case "email": label = "Email"; type = "email"; break;
                                            case "telefone": label = "Número do telefone"; type = "tel"; break;
                                            case "nomeCamisa": label = "Nome na camisa"; break;
                                            case "numeroCamisa": label = "Número da camisa"; type = "number"; break;
                                            case "altura": label = "Altura (cm)"; type = "number"; break;
                                            case "peso": label = "Peso (kg)"; type = "number"; break;
                                            case "posicao": label = "Posição"; break;
                                            case "pernaDominante": label = "Perna dominante"; break;
                                            case "senha": label = "Senha Atual"; type = "password"; break;
                                            default: label = key.charAt(0).toUpperCase() + key.slice(1);
                                        }
                                        return (
                                            <div key={key} className="flex flex-col md:flex-row items-center gap-3 p-4 rounded-xl bg-gray-50 shadow-sm">
                                                <label className="font-bold text-gray-600 w-40 md:text-right md:mr-4">{label}</label>
                                                <Input type={type} name={key} value={value} onChange={handleChange}
                                                    className={type === "password" ? "bg-white border border-gray-300 rounded-lg px-4 py-2 text-black w-full focus:outline-none focus:ring-2 focus:ring-[var(--color-purple)] transition" : "bg-white border border-gray-300 rounded-lg px-4 py-2 text-black flex-1 focus:outline-none focus:ring-2 focus:ring-[var(--color-purple)] transition"} />
                                            </div>
                                        );
                                    })}
                                </div>
                            </form>
                        </div>
                    </div>
                </SectionContainer>
            </MainContainer>
    </>
    );
}
export default Perfil;