"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { MobileNav } from "./mobile-nav"
import Close from "../icons/close"
import Menu from "../icons/menu"
/* import { Icons } from "@/components/icons" */
// import { MobileNav } from "@/components/mobile-nav"

interface MainNavProps {
    items?: MainNavItem[]
    children?: React.ReactNode
}

export type MainNavItem = {
    title: string
    href: string
    disabled?: boolean
}

export function MainNav({ items, children }: MainNavProps) {
    const path = usePathname()
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)

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
                    {items?.map((item, index) => (
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
            <button
                className="flex items-center space-x-2 md:hidden"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
                {showMobileMenu ? <Close /> : <Menu />}
                <span className="font-bold">Menu</span>
            </button>
            {showMobileMenu && items && (
                <MobileNav items={items}>{children}</MobileNav>
            )}
        </div>
    )
}