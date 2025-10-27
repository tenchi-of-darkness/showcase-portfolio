"use client";
import { useEffect, useRef } from "react";

export default function DigitalRain() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const c = canvasRef.current;
        if (!c) return;

        const ctx = c.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        c.height = window.innerHeight;
        c.width = window.innerWidth;

        const chars =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        const matrix = chars.split("");

        const fontSize = 10;
        const columns = Math.floor(c.width / fontSize);
        const drops: number[] = new Array(columns).fill(1);

        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
            ctx.fillRect(0, 0, c.width, c.height);

            ctx.fillStyle = "#6338AE"; // purple-ish color
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = matrix[Math.floor(Math.random() * matrix.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > c.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        const interval = setInterval(draw, 35);

        const handleResize = () => {
            c.height = window.innerHeight;
            c.width = window.innerWidth;
        };
        window.addEventListener("resize", handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full block bg-black z-[-1]"
        />
    );
}