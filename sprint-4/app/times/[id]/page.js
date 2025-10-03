'use client';

import Header from "@/app/Components/Header";
import TimeCard from "@/app/Components/TimeCard";
import SectionContainer from "@/app/Components/SectionContainer";
import MainContainer from "@/app/Components/MainContainer";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import VoltarButton from "@/app/Components/VoltarButton";


export default function PaginaUsuario() {
    const { id: usuarioId } = useParams();
    const router = useRouter();
    const links = [
        { label: "Inicio", href: `/inicioposlogin/${usuarioId}` },
        { label: "Perfil", href: `/perfil/${usuarioId}` },
        { label: "Times", href: `/times/${usuarioId}` },
        { label: "Copas PAB", href: `/copasPab/${usuarioId}` },
        { label: "Sair", href: "/" }
    ];
    return (
        <div >
            <Header links={links} bgClass="bg-white" src="/Logo-preta.png" color="text-black" />
            <MainContainer>
                <SectionContainer tamanho={850}>
                    <div className="w-full flex flex-col items-start justify-center gap-2 mb-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-2 font-title">Entrar em um Time</h2>
                        <p>Encontre um time para a Copa Passa Bola! <strong className="text-[var(--color-pink)]">Se identifiquem e
                            solicite a entrada!</strong></p>
                    </div>
                    <div className="w-full flex flex-col items-end">
                        <Link className="text-[var(--color-green)] font-semibold" href={`/times/cadastrartime/${usuarioId}`}>Cadastrar um Time</Link>
                        <Link className="text-[var(--color-pink)] font-semibold" href={`/times/meutime/${usuarioId}`}>Meu Time</Link>
                    </div>
                    <hr className="my-6 w-full border-gray-300 rounded-xl" />
                    <form className="w-full" action="">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-7 max-h-[750px] md:max-h-[580px] overflow-auto w-full">
                            <TimeCard
                                nome="Time Laranja"
                                descricao="Em formação, venha participar!"
                                imagem="/time-feminino.png"
                                membros="2/15"
                                link="./chat.html"
                            />
                            <TimeCard
                                nome="Time Laranja"
                                descricao="Em formação, venha participar!"
                                imagem="/time-feminino.png"
                                membros="2/15"
                                link="./chat.html"
                            />
                            <TimeCard
                                nome="Time Azul"
                                descricao="Equipe pronta para competir!"
                                imagem="/time-feminino.png"
                                membros="8/15"
                                link="./chat.html"
                            />
                            <TimeCard
                                nome="Time Verde"
                                descricao="Venha fazer parte do nosso time!"
                                imagem="/time-feminino.png"
                                membros="5/15"
                                link="./chat.html"
                            />
                            <TimeCard
                                nome="Time Rosa"
                                descricao="Buscando novas jogadoras!"
                                imagem="/time-feminino.png"
                                membros="3/15"
                                link="./chat.html"
                            />
                            <TimeCard
                                nome="Time Amarelo"
                                descricao="Time animado e unido!"
                                imagem="/time-feminino.png"
                                membros="10/15"
                                link="./chat.html"
                            />
                            <TimeCard
                                nome="Time Roxo"
                                descricao="Foco na vitória!"
                                imagem="/time-feminino.png"
                                membros="7/15"
                                link="./chat.html"
                            />
                            <TimeCard
                                nome="Time Preto"
                                descricao="Defesa forte, ataque rápido!"
                                imagem="/time-feminino.png"
                                membros="6/15"
                                link="./chat.html"
                            />
                            <TimeCard
                                nome="Time Branco"
                                descricao="Jogando com alegria!"
                                imagem="/time-feminino.png"
                                membros="4/15"
                                link="./chat.html"
                            />
                            <TimeCard
                                nome="Time Vermelho"
                                descricao="Venha fazer história conosco!"
                                imagem="/time-feminino.png"
                                membros="9/15"
                                link="./chat.html"
                            />
                        </div>
                    </form>
                </SectionContainer>
            </MainContainer>
        </div>
    );
}