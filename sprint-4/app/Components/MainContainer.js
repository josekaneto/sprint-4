export default function MainContainer({ children, classeAdicional }) {
    return (
        <main className={`w-full min-h-screen flex justify-center-safe place-items-center bg-pink ${classeAdicional}`}>
            {children}
        </main>
    );
}
