'use client';
import Header from "@/app/Components/Header";
import MainContainer from "@/app/Components/MainContainer";
import VoltarButton from "@/app/Components/VoltarButton";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Bracket } from "react-brackets";
import LoadingScreen from "@/app/Components/LoadingScreen";
import AuthGuard from "@/app/Components/AuthGuard";

export default function ChaveamentoPage() {

    const { id: usuarioId } = useParams();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [times, setTimes] = useState([]);
    useEffect(() => {
        setLoading(true);
        const usuarios = typeof window !== "undefined" ? localStorage.getItem("usuarios") : null;
        if (!usuarios) {
            router.replace("/");
            return;
        }
        const timesLocal = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("times") || "[]") : [];
        setTimes(Array.isArray(timesLocal) ? timesLocal : []);
        setLoading(false);
    }, [router]);

    // Componente customizado para blocos menores e responsivos
    function CustomSeed({ seed }) {
        return (
            <div className="min-w-[40px] max-w-[90px] min-h-[24px] flex flex-col justify-center items-center bg-pink-50 border border-pink-300 rounded-md text-[10px] md:text-xs px-1 py-0.5">
                {seed.teams.map((team, idx) => (
                    <div key={idx} className="truncate w-full text-center">{team.name}</div>
                ))}
            </div>
        );
    }

    const links = [
        { label: "Inicio", href: `/inicioposlogin/${usuarioId}` },
        { label: "Perfil", href: `/perfil/${usuarioId}` },
        { label: "Times", href: `/times/${usuarioId}` },
        { label: "Loja", href: `/loja/${usuarioId}` },
        { label: "Copas PAB", href: `/copasPab/${usuarioId}` },
        { label: "Sair", href: "/" }
    ];

    // Função para gerar rounds single elimination para até 16 times
    function generateRounds(timesArr) {
        const rounds = [];
        let currentTeams = timesArr.map(t => ({ name: t.nome }));
        let numTeams = currentTeams.length;
        let numRounds = 0;
        while (numTeams > 1) {
            numRounds++;
            numTeams = Math.ceil(numTeams / 2);
        }
        for (let r = 0; r < numRounds; r++) {
            const seeds = [];
            for (let i = 0; i < currentTeams.length; i += 2) {
                seeds.push({
                    id: i / 2 + 1,
                    teams: [
                        currentTeams[i] || { name: "A Definir" },
                        currentTeams[i + 1] || { name: "A Definir" }
                    ]
                });
            }
            let title = "";
            if (numRounds === 1) title = "Final";
            else if (numRounds === 2) title = r === 0 ? "Semifinal" : "Final";
            else if (numRounds === 3) title = ["Quartas de Final", "Semifinal", "Final"][r];
            else if (numRounds === 4) title = ["Oitavas de Final", "Quartas de Final", "Semifinal", "Final"][r];
            else title = `Rodada ${r + 1}`;
            rounds.push({ title, seeds });
            currentTeams = Array.from({ length: Math.ceil(currentTeams.length / 2) }, (_, idx) => ({ name: `Vencedor ${idx + 1}` }));
        }
        return rounds;
    }

    // Divide os times em grupos de até 16
    const brackets = [];
    if (times.length > 0) {
        for (let i = 0; i < times.length; i += 16) {
            const group = times.slice(i, i + 16);
            if (group.length === 1) {
                brackets.push([
                    {
                        title: "Final",
                        seeds: [
                            { id: 1, teams: [{ name: group[0].nome }, { name: "A Definir" }] }
                        ]
                    }
                ]);
            } else {
                brackets.push(generateRounds(group));
            }
        }
    } else {
        brackets.push([
            {
                title: "Quartas de Final",
                seeds: [
                    { id: 1, teams: [{ name: "Time A" }, { name: "Time B" }] },
                    { id: 2, teams: [{ name: "Time C" }, { name: "Time D" }] }
                ]
            },
            {
                title: "Semifinal",
                seeds: [
                    { id: 3, teams: [{ name: "Vencedor 1" }, { name: "Vencedor 2" }] },
                    { id: 4, teams: [{ name: "Vencedor 3" }, { name: "Vencedor 4" }] }
                ]
            },
            {
                title: "Final",
                seeds: [
                    { id: 5, teams: [{ name: "Campeão" }, { name: "Vice" }] }
                ]
            }
        ]);
    }

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <AuthGuard>
            <Header links={links} bgClass="bg-white" src="/Logo-preta.png" color="text-black" />
            <MainContainer>
                <div className="min-h-screen w-full flex flex-col items-center px-2 md:px-8 py-6 md:py-10">
                    <div className="w-full max-w-xs md:max-w-2xl flex flex-col items-center justify-center gap-2 mb-6 text-center bg-white rounded-2xl shadow-lg p-2 md:p-6 border-2 border-pink-300">
                        <div className="w-full flex justify-end px-2 md:px-4">
                            <VoltarButton onClick={() => router.back()} />
                        </div>
                        <h1 className="text-xl md:text-5xl font-bold mb-2 font-title text-black drop-shadow">Chaveamento</h1>
                        <p className="text-xs md:text-lg font-semibold text-black">Veja o chaveamento dos times para a Copa Passa Bola!</p>
                    </div>
                    <div className="w-full flex flex-col items-center gap-4 md:gap-8">
                        {brackets.map((rounds, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl shadow-lg p-2 md:p-6 w-full max-w-xs md:max-w-xl overflow-x-auto border-2 border-pink-300"
                                style={{ minWidth: 'fit-content' }}
                            >
                                <h2 className="text-xs md:text-2xl text-center font-semibold mb-4 md:mb-8 tracking-wide text-purple">Chaveamento {idx + 1}</h2>
                                <div className="w-full">
                                    <Bracket rounds={rounds} seedComponent={CustomSeed} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </MainContainer>
        </AuthGuard>
    );
}
