"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { MobileNav } from "./mobile-nav"
import Close from "../icons/close"
import Menu from "../icons/menu"
import { SignIn } from "../shared/AuthButtons"
import { Avatar, AvatarImage } from "../ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut } from "lucide-react"
import { signOut } from "next-auth/react"
import { Button } from "../ui/button"
import Icon from "@mdi/react"
import { mdiCartOutline, mdiChevronDown } from "@mdi/js"
import CartNav from "./cart-nav"

interface MainNavProps {
    items?: MainNavItem[]
    user?: any
    children?: React.ReactNode
}

export type MainNavItem = {
    title: string
    href: string
    disabled?: boolean
    hideInNav?: boolean
    showCart?: boolean
}

export function MainNav({ items, user, children }: MainNavProps) {
    const path = usePathname()
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
    const [showCart, setShowCart] = useState<boolean>(false);

    useEffect(() => {
        console.log(path)
        const navItem = items?.find((item) => item.href === path);
        setShowCart(navItem && navItem?.showCart || false)
        /* 
        items?.forEach((item) => {
            return setShowCart(item.href == path && (item.showCart ?? false))
        }) */
    }, [items, path]);

    return (
        <div className="flex flex-grow gap-6 md:gap-10 font-roboto">
            <Link href="/" className="hidden items-center space-x-2 md:flex">
                <Image
                    src={'/atlas.svg'}
                    width={100}
                    height={100}
                    className="h-8 w-auto"
                    alt="Atlas Logo"
                />
            </Link>
            {items?.length ? (
                <nav className="hidden gap-6 md:flex md:flex-grow md:justify-center">
                    {items?.filter((item) => !item.hideInNav).map((item, index) => (
                        <Link
                            key={index}
                            href={item.disabled ? "#" : item.href}
                            className={cn(
                                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                                item.href == path
                                    ? "text-primary"
                                    : "text-foreground/60",
                                item.disabled && "cursor-not-allowed opacity-80"
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
            ) : null}
            <div className="hidden md:flex gap-3">
                {!!user ?
                    <>
                        {showCart && <CartNav /> }
                        <DropdownMenu>
                            <DropdownMenuTrigger className="cursor-pointer" asChild>
                                <Avatar>
                                    <AvatarImage src={user.image} />
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-background border-background text-white w-56">
                                <DropdownMenuLabel>Logged in as {user.name}</DropdownMenuLabel>
                                <DropdownMenuItem
                                    onClick={() => {
                                        signOut()
                                    }}
                                    className="cursor-pointer"
                                >
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </>
                    :
                    <SignIn />
                }
            </div>
            <button
                className="flex items-center space-x-2 md:hidden"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
                {showMobileMenu ? <Close /> : <Menu />}
                <span className="font-bold">Menu</span>
            </button>
            {
                showMobileMenu && items && (<MobileNav items={items}>{children}</MobileNav>)
            }
        </div >
    )
}