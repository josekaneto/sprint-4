export default function SectionContainer({ children, tamanho }) {
    return (
        <section className={`bg-white text-black w-full md:w-4/5 h-auto md:h-[${tamanho}px] p-5 md:p-10 rounded-2xl`}>
            {children}
        </section>
    );
}
