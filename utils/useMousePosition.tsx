// https://gist.github.com/whoisryosuke/99f23c9957d90e8cc3eb7689ffa5757c
import { useState, useEffect } from "react";

interface MousePosition {
    mouseX: number | null;
    mouseY: number | null;
}

const useMousePosition = (): MousePosition => {
    const [mousePosition, setMousePosition] = useState<any>({
        mouseX: null,
        mouseY: null,
    });

    const updateMousePosition = (ev: any) => {
        setMousePosition({ mouseX: ev.clientX, mouseY: ev.clientY });
    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);

        return () =>
            window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePosition;
};

export default useMousePosition;
