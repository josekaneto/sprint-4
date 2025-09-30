'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const [sucesso, setSucesso] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        setSucesso("");
        if (!email || !senha) {
            setErro("Preencha todos os campos.");
            return;
        }
        // Lógica simulada de login
        if (email === "usuario@teste.com" && senha === "123456") {
            setErro("");
            setSucesso("Login realizado com sucesso!");
            // Aqui você pode redirecionar ou salvar token, etc.
        } else {
            setErro("Email ou senha inválidos.");
        }
    };

    return (
        <div className="w-screen h-screen bg-center bg-no-repeat bg-cover bg-[url(/campo.png)] justify-items-end-safe">
            <aside className="w-full md:w-[50vw] h-screen flex flex-col items-center px-4 md:px-10 justify-center gap-8 bg-white md:rounded-l-4xl rounded-none">
                <div className="w-5/6 flex justify-end">
                    <button onClick={() => router.back()} className="text-[var(--color-pink)] font-semibold text-lg sm:text-lg">Voltar</button>
                </div>
                <div className="w-5/6 flex flex-col gap-10">
                    <img className="w-24 md:w-32 mx-auto md:mx-0" src="/Logo-preta.png" alt="Logo Passa Bola Branca" />
                    <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left">Entrar</h2>
                </div>
                <form id="loginForm" className="w-5/6 flex flex-col justify-center gap-8" onSubmit={handleSubmit}>
                    <div className="w-full flex flex-col gap-6">
                        <input
                            name="email"
                            className="py-3 transition border-b-2 border-gray-400 focus:border-b-2 focus:border-[var(--color-pink)] focus:outline-none w-full"
                            type="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            name="senha"
                            className="py-3 transition border-b-2 border-gray-400 focus:border-b-2 focus:border-[var(--color-pink)] focus:outline-none w-full"
                            type="password"
                            placeholder="Senha"
                            required
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                        />
                    </div>
                    <div className="w-full flex justify-end">
                        <Link
                            className="text-center text-lg text-[var(--color-pink)] "
                            href={{
                                pathname: "/esqueciMinhaSenha",
                                query: { email }
                            }}
                        >
                            Esqueci minha senha?
                        </Link>
                    </div>
                    <button className="bg-[var(--color-pink)] text-white py-3 rounded-lg font-bold text-center hover:bg-[var(--color-pink)]/90 duration-300" type="submit">Entrar</button>
                    {erro ? (
                        <p className="text-center text-red-500 text-lg">{erro}</p>
                    ) : null}
                    {sucesso ? (
                        <p className="text-center text-green-600 text-lg">{sucesso}</p>
                    ) : null}
                    <div className="w-full flex justify-center py-6 rounded-lg">
                        <p className="text-lg text-center">Não tem uma conta? 
                            <Link className="text-[var(--color-pink)] font-bold" href="./cadastreSePerfil.html"> Cadastre-se </Link>
                        </p>
                    </div>
                    <div className="w-full flex justify-center">
                        <Link href="#" className="w-full md:w-1/2 flex items-center justify-center gap-x-3 py-3 text-lg border-2 border-[var(--color-pink)] rounded-xl">
                            <img src="/google.png" alt="Google" />
                            Entrar com o Google
                        </Link>
                    </div>
                </form>
            </aside>
        </div>
    );
}

export default Login;