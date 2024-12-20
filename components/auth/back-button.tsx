import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function BackButton({ label, href }: { label: string; href: string }) {
    return (
        <Button variant="link" className="w-full font-normal" size="sm" asChild>
            <Link href={href}>{label}</Link>
        </Button>
    );
}
