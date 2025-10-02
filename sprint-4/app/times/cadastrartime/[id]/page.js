
'use client';
import React, { useState } from 'react';
import Header from '@/app/Components/Header';
import MainContainer from '@/app/Components/MainContainer';
import SectionContainer from '@/app/Components/SectionContainer';
import Input from '@/app/Components/Input';
import ColorInput from '@/app/Components/ColorInput';
import Link from 'next/link';
import VoltarButton from '@/app/Components/VoltarButton';
import { useRouter } from 'next/navigation';

export default function CadastrarTime({ params }) {
    const router = useRouter();
    const { id: usuarioId } = React.use(params);
    const links = [
        { label: "Inicio", href: `/inicioposlogin/${usuarioId}` },
        { label: "Perfil", href: `/perfil/${usuarioId}` },
        { label: "Times", href: `/times/${usuarioId}` },
        { label: "Copas PAB", href: `/copasPab/${usuarioId}` },
        { label: "Sair", href: "/" }
    ];

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleNomeChange = (e) => {
        setNome(e.target.value);
    };
    const handleDescricaoChange = (e) => {
        setDescricao(e.target.value);
    };

    return (
        <div>
            <Header links={links} bgClass="bg-white" src="/Logo-preta.png" color="text-black" />
            <MainContainer>
                <SectionContainer tamanho={700}>
                    <div>
                        <div className="w-full flex justify-end">
                            <VoltarButton onClick={() => router.back()} />
                        </div>
                        <h2 className="text-3xl font-bold mb-5">Cadastrar um Time</h2>
                        <div className="w-full flex items-center gap-20">
                            <p>Cadastre o seu Time na Copa Passa a Bola!</p>
                        </div>
                        <hr className="my-6 w-full border-gray-300 rounded-xl" />
                    </div>
                    <div className="flex flex-col items-center md:flex-row md:items-center sm:items-center gap-8">
                        <div className="flex flex-col items-center justify-start w-1/4 min-w-[180px] gap-4 pt-2">
                            <img src="/womensTeams.png" alt="Avatar" className="w-24 h-24 sm:w-32 sm:h-32 object-cover mb-2" />
                            <div className="text-center w-full flex flex-col gap-5">
                                <label className="mb-4">
                                    <input type="file" className="border hidden border-gray-300 rounded px-2 sm:px-4 py-2" />
                                    <span className="block text-center mt-2 text-sm sm:text-base">Selecionar a Imagem</span>
                                </label>
                                <div className="flex flex-col items-center gap-2">
                                    <p className="text-gray-700 font-semibold text-base sm:text-lg">Jogadoras</p>
                                    <p className="text-[var(--color-pink)] font-bold text-xl sm:text-2xl mb-2">0/15</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Link href="./meuTime.html" className="text-[var(--color-purple)] font-bold text-sm sm:text-base">Visualizar</Link>
                                    <Link href="#" className="text-[var(--color-purple)] font-bold text-sm sm:text-base">Convidar</Link>
                                </div>
                            </div>
                        </div>
                        <form className="w-3/4 flex flex-col gap-6" action="">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center">
                                    <span className="font-bold text-gray-600 text-sm sm:text-base">Nome do Time:</span>
                                    <Input value={nome} onChange={handleNomeChange} placeholder="Nome do time" className="border border-gray-300 rounded-lg px-2 sm:px-3 py-2 text-black bg-white w-full sm:w-48 " />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-bold text-gray-600 text-sm sm:text-base">Descrição do Time</span>
                                <textarea rows="7" value={descricao} onChange={handleDescricaoChange}
                                    className="border border-gray-300 rounded-lg px-2 sm:px-3 py-2 text-black bg-white resize-none text-sm sm:text-base focus:border-pink-500 focus:outline-none " />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-bold text-gray-600 text-sm sm:text-base">Cores Principais:</span>
                                <div className="flex flex-row gap-2 sm:gap-3 mt-1">
                                    <ColorInput
                                        id="cor1"
                                        onChange={e => setCor1(e.target.value)}
                                        title="Escolha a cor principal 1"
                                    />
                                    <ColorInput
                                        id="cor2"
                                        onChange={e => setCor2(e.target.value)}
                                        title="Escolha a cor principal 2"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end mt-6">
                                <button type="submit" className="bg-[var(--color-purple)] text-white font-bold px-4 sm:px-8 py-2 rounded-lg text-sm sm:text-base">Salvar</button>
                            </div>
                        </form>
                    </div>
                </SectionContainer>
            </MainContainer>
        </div>
    );
}
