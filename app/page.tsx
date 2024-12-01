import { Poppins } from "next/font/google";
import { cn } from "~/lib/utils";

import LogInButton from "~/components/auth/login-button";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
});

export default function HomePage() {
    return (
        <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
            <h1
                className={cn("space-y-6 text-center text-6xl font-semibold text-white drop-shadow-md", font.className)}
            >
                Bosch
            </h1>
            <p className="text-lg text-white">A simple authentication service</p>
            <LogInButton>Sign in</LogInButton>
        </main>
    );
}
