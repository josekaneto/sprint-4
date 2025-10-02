export default function MainContainer({ children }) {
    return (
        <main className="w-full min-h-screen flex justify-center-safe place-items-center bg-pink ">
            {children}
        </main>
    );
}
