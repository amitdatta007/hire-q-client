import Link from "next/link";

interface CardDescription {
    title: string;
    description: string;
    backBtnTitle: string;
    backBtnHref: string;
}

const CardDescription = ({
    title,
    description,
    backBtnTitle,
    backBtnHref
}: CardDescription) => {
    return (
        <div className="flex flex-col gap-2">
            <h2>{title}</h2>
            <div className="text-muted-foreground flex gap-1 text-sm font-medium">
                {description}
                <Link href={backBtnHref} className="text-primary hover:underline">
                    {backBtnTitle}
                </Link>
            </div>
        </div>
    );
};

export default CardDescription;