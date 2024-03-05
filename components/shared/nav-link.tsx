"use client"

import classNames from "@/utils/classNames";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    className?: string | undefined;
    activeClassName?: string;
    href: string;
    exact?: boolean;
}

const NavLink = ({ children, activeClassName, href, exact, ...props }: NavLinkProps) => {
    const path = usePathname();
    const active = exact ? path === href : path.startsWith(href);
    const classes = classNames(props.className, active && activeClassName);

    if(classes){
        props.className = classes;
    }

    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    );
};

export default NavLink;