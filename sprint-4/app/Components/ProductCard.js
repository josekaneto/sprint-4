export default function ProductCard({ nome, preco, imagem, onAddToCart }) {
    return (
        <div className="bg-white items-center-safe rounded-2xl p-4 flex flex-col gap-3 shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full hover:scale-[1.02]">
            <div className="w-48 h-48 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                <img src={imagem} alt={nome} className="w-full h-full bg-fit" />
            </div>
            <div className="w-full flex flex-col gap-2 flex-1">
                <h3 className="text-xl font-bold text-black font-title">{nome}</h3>
                <p className="text-2xl font-bold text-pink">R$ {preco.toFixed(2)}</p>
            </div>
            <button 
                onClick={onAddToCart}
                className="bg-pink text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-purple transition-colors duration-300 text-lg w-full"
            >
                ADICIONAR AO CARRINHO
            </button>
        </div>
    );
}
