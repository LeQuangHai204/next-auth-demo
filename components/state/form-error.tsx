import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export default function FormError({ message }: { message?: string }) {
    if (!message) {
        return null;
    }

    return (
        <div className="roundeed-md flex items-center gap-x-2 bg-destructive/15 p-3 text-sm text-destructive">
            <ExclamationTriangleIcon />
            <p>{message}</p>
        </div>
    );
}
