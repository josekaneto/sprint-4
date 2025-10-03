"use client";
import { useState } from "react";
import MainContainer from "@/app/Components/MainContainer";
import SectionContainer from "@/app/Components/SectionContainer";
import Input from "@/app/Components/Input";
import VoltarButton from "@/app/Components/VoltarButton";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/app/Components/Header";

function ConvidarJogadoras() {
	const router = useRouter();
	const { id } = useParams();
    const links = [
        { label: "Inicio", href: `/inicioposlogin/${id}` },
        { label: "Perfil", href: `/perfil/${id}` },
        { label: "Times", href: `/times/${id}` },
        { label: "Copas PAB", href: `/copasPab/${id}` },
        { label: "Sair", href: "/" }
    ];

	const [jogadoras, setJogadoras] = useState(() => {
		// Carrega do localStorage ao iniciar
		if (typeof window !== "undefined") {
			return JSON.parse(localStorage.getItem("jogadoras") || "[]");
		}
		return [];
	});
	const [novaJogadora, setNovaJogadora] = useState({
		nomeCompleto: "",
		pernaDominante: "",
		posicao: ""
	});

	// Salva jogadoras no localStorage sempre que muda
	const saveJogadoras = (list) => {
		localStorage.setItem("jogadoras", JSON.stringify(list));
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNovaJogadora((prev) => ({ ...prev, [name]: value }));
	};

	const handleAddJogadora = (e) => {
		e.preventDefault();
		if (!novaJogadora.nomeCompleto) return;
		const updated = [...jogadoras, novaJogadora];
		setJogadoras(updated);
		saveJogadoras(updated);
		setNovaJogadora({ nomeCompleto: "", pernaDominante: "", posicao: "" });
	};

	const handleRemoveJogadora = (idx) => {
		const updated = jogadoras.filter((_, i) => i !== idx);
		setJogadoras(updated);
		saveJogadoras(updated);
	};

	return (
        <>
            <Header links={links} bgClass="bg-white" src="/Logo-preta.png" color="text-black" />
            <MainContainer classeAdicional="md:py-10">
                <SectionContainer tamanho={600}>
                    <div className="w-full flex justify-end mb-4">
                        <VoltarButton onClick={() => router.back()} />
                    </div>
                    <h2 className="text-2xl font-bold mb-6 text-center">Cadastrar Jogadoras</h2>
                    <form className="flex flex-col gap-4 mb-8" onSubmit={handleAddJogadora}>
                        <Input
                            type="text"
                            name="nomeCompleto"
                            value={novaJogadora.nomeCompleto}
                            onChange={handleChange}
                            placeholder="Nome completo"
                            required
                        />
                        <Input
                            type="text"
                            name="pernaDominante"
                            value={novaJogadora.pernaDominante}
                            onChange={handleChange}
                            placeholder="Perna dominante"
                        />
                        <Input
                            type="text"
                            name="posicao"
                            value={novaJogadora.posicao}
                            onChange={handleChange}
                            placeholder="Posição"
                        />
                        <button type="submit" className="bg-[var(--color-purple)] text-white rounded-lg px-6 py-2 font-bold mt-2">Adicionar Jogadora</button>
                    </form>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Jogadoras cadastradas:</h3>
                        {jogadoras.length === 0 ? (
                            <p className="text-gray-500">Nenhuma jogadora cadastrada.</p>
                        ) : (
                            <ul className="flex flex-col gap-3">
                                {jogadoras.map((j, idx) => (
                                    <li key={idx} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 p-4 bg-gray-50 rounded-xl shadow-sm">
                                        <span><strong>Nome:</strong> {j.nomeCompleto}</span>
                                        <span><strong>Perna dominante:</strong> {j.pernaDominante}</span>
                                        <span><strong>Posição:</strong> {j.posicao}</span>
                                        <button className="text-red-500 font-bold ml-auto" onClick={() => handleRemoveJogadora(idx)}>Remover</button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="w-full flex justify-end mt-8">
                        <Link href={`/times/meutime/${id}`} className="bg-[var(--color-purple)] text-white rounded-lg px-6 py-2 font-bold text-center">Visualizar Time</Link>
                    </div>
                </SectionContainer>
            </MainContainer>
        </>
	);
}
export default ConvidarJogadoras;
