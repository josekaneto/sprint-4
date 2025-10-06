import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function AuthGuard({ children }) {
    const router = useRouter();
    const { id: usuarioId } = useParams();

    useEffect(() => {
        const usuarios = typeof window !== "undefined" ? localStorage.getItem("usuarios") : null;
        if (!usuarios) {
            router.replace("/");
        }
    }, [router, usuarioId]);

    return children;
}
