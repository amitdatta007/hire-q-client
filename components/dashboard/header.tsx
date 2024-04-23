import { cn } from "@/lib/utils";
import BreadCrumb from "../ui/breadcrumb";

type BreadCrumbType = {
    title: string;
    link: string;
};


interface HeaderProps {
    className?: string;
    title: string;
    subTitle?: string;
    description?: string;
    items?: BreadCrumbType[];
}

const Header = ({ className, title, subTitle, description, items }: HeaderProps) => {

    return (
        <div className={
            cn("flex flex-col gap-2", className)
        }>
            
            {
                items?.length && <BreadCrumb items={items} />
            }

            <h4 className="font-semibold">
                {title}
                {`   `}
                { subTitle && <span className="text-muted-foreground">({subTitle})</span> }
            </h4>

            <span className="text-xs md:text-sm text-muted-foreground font-medium">{description}</span>

        </div>
    );
};

export default Header;