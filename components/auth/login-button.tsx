"use client";

import { useRouter } from "next/navigation";
import React from "react";

import { Button } from "~/components/ui/button";

export default function LogInButton({
    children,
    mode,
    asChild,
}: {
    children: React.ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}) {
    const router = useRouter();

    const onClick = () => {
        router.push("/auth/login");
    };

    if (mode === "modal") {
    }

    return (
        <Button className="mt-4" variant="secondary" size="lg" onClick={onClick}>
            {children}
        </Button>
    );
}
