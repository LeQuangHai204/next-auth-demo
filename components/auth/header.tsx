import { Poppins } from "next/font/google";
import { cn } from "~/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
});

export default function AuthHeader({ label }: { label: string }) {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-y-4">
            <h1 className={cn("text-3xl font-semibold", font.className)}>Auth</h1>
            <p>{label}</p>
        </div>
    );
}
