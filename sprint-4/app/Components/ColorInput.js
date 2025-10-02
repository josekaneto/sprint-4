export default function ColorInput({ id, value, onChange, title }) {
    return (
        <input
            id={id}
            type="color"
            onChange={onChange}
            className="w-12 h-8 sm:w-16 rounded-lg border-2 border-gray-300 shadow focus:border-purple focus:shadow-lg cursor-pointer transition"
            title={title}
        />
    );
}