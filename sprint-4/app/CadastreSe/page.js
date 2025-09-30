function CadastreSe() {
    return ( 
    <div>
        <h1>Cadastro</h1>
        <form>
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Senha" required />
            <button type="submit">Cadastrar</button>
        </form>
    </div>
    );
}

export default CadastreSe;