'use client'

import {useRouter} from "next/navigation";
import {forwardRef} from "react";
import {twMerge} from "tailwind-merge";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";

interface ListItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    name: string;
    href: string;
}

const LeftWidget = forwardRef<HTMLButtonElement, ListItemProps>(({
    className,
    name,
    href,
}, ref) => {
    const router = useRouter();

    // const onClick = () => {
    //     router.push(href);
    // }

    return (
        <Link href={href} className={twMerge(`relative h-full w-full overflow-hidden rounded-3xl `,className)}> 
            <div className={"  relative group flex items-center h-full w-full top-left bg-cover bg-center overflow-hidden hover:saturate-150 transition"}>
                <div className={'relative h-full w-full bg-black/[.3]'}>
                    <p className={'truncate text-white text-left m-4 mb-0 text-sm font-medium'}>{name}</p>
                    <p className={'truncate text-white text-left ml-4 text-[0.6rem] max-w-[100px]'}>21 Savage, Lana Del Rey, Kendrick Lamar</p>
                </div>
            </div>
        </Link>
        
    );
});

export default LeftWidget;