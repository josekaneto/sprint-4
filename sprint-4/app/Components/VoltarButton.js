import React from "react";

const VoltarButton = ({ onClick }) => (
    <button
        type="button"
        onClick={onClick}
        className="text-pink-500 font-semibold text-lg hover:underline"
    >
        Voltar
    </button>
);

export default VoltarButton;
