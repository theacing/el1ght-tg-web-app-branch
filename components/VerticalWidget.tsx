'use client'

import Link from "next/link";
import {useRouter} from "next/navigation";
import {forwardRef} from "react";
import {twMerge} from "tailwind-merge";

interface ListItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    name: string;
    href: string;
}

const ListItem = forwardRef<HTMLButtonElement, ListItemProps>(({
    className,
    name,
    href,
}, ref) => {
    const router = useRouter();

    // const onClick = () => {
    //     router.push(href);
    // }

    return (
        <Link href={href} className={twMerge(`relative h-full w-full rounded-3xl bg-cover bg-center hover:saturate-150 transition`, className)}>
            <div className={"relative group flex bg-black/[.3] rounded-3xl items-center h-full w-full overflow-hidden flex flex-col items-center justify-center"}>
                <p className={'truncate text-white text-[1.5rem] max-w-[100px] font-medium'}>YOU</p>
                <p className={'truncate text-white text-[1.5rem] max-w-[100px] font-medium'}>MAY</p>
                <p className={'truncate text-white text-[1.5rem] max-w-[100px] font-medium'}>LIKE</p>
            </div>
        </Link>
    );
});

export default ListItem;