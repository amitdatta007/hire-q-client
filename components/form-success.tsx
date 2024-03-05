import { cn } from "@/lib/utils";
import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
    message?: string;
};

export const FormSuccess = ({
    message,
}: FormSuccessProps) => {
    if (!message) return null;

    return (
        <div className="mt-4 bg-emerald-500/15 h-10 px-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
            <CheckCircledIcon className="h-5 w-5" />
            <span>{message}</span>
        </div>
    );
};