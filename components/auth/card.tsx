import { Card, CardContent, CardHeader, CardFooter } from "~/components/ui/card";
import AuthHeader from "~/components/auth/header";
import OAuthOptions from "~/components/auth/social";
import BackButton from "~/components/auth/back-button";

export default function CardWrapper({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial,
}: {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial: boolean;
}) {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <AuthHeader label={headerLabel} />
            </CardHeader>
            <CardContent>{children}</CardContent>
            {showSocial && (
                <CardFooter>
                    <OAuthOptions />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton label={backButtonLabel} href={backButtonHref} />
            </CardFooter>
        </Card>
    );
}
