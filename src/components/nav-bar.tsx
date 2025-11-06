"use client"

import React, {ComponentProps} from 'react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList, navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {Icon} from "@iconify/react";
import Link from "next/link";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {Menu} from "lucide-react";

function NavLink({className, ...props}: ComponentProps<typeof Link>) {
    return <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link
                className={cn(className, "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground/90")} {...props}/>
        </NavigationMenuLink>
    </NavigationMenuItem>;
}

function NavIcon({className, ...props}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
    return <NavigationMenuItem>
        <NavigationMenuLink asChild>
            <a className={cn(className, "px-0.5 hover:bg-transparent text-secondary")} {...props}/>
        </NavigationMenuLink>
    </NavigationMenuItem>;
}

function NavBar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="bg-primary h-14 md:h-10 text-primary-foreground fixed top-0 z-50 w-dvw">
            <div className="flex items-center h-full justify-between">
                {/* Desktop Menu */}
                <NavigationMenu className="hidden md:flex gap-x-4">
                    <Link href="/" className="ml-4 text-lg font-semibold">
                        Melanie
                    </Link>

                    <NavigationMenuList>
                        <NavLink href={"/#about"}>About</NavLink>
                        <NavLink href={"/#skills"}>Skills</NavLink>
                        <NavLink href={"/#proficiencies"}>Proficiencies</NavLink>
                        <NavLink href={"/#projects"}>Projects</NavLink>
                        <NavLink href={"/#experience"}>Experience</NavLink>
                        <NavLink href={"/#contact"}>Contact</NavLink>
                        <div className="flex items-center gap-x-2">
                            <NavIcon href="https://github.com/tenchi-of-darkness">
                                <Icon className={"text-secondary size-6"} icon="line-md:github-twotone"/>
                            </NavIcon>

                            <NavIcon className={"mr-3"} href="https://www.linkedin.com/in/melanie-van-de-graaf/">
                                <Icon className={"text-secondary size-6"} icon="line-md:linkedin"/>
                            </NavIcon>
                        </div>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Mobile Menu */}
                <div className="md:hidden flex justify-between items-center w-dvw">
                    <Link href="/" className="ml-6 text-lg font-bold">
                        Melanie
                    </Link>

                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="project" size="icon-lg" className={"mr-3 cursor-pointer"}>
                                <Menu className="size-6"/>
                                <span className="sr-only">Open Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader>
                                <SheetTitle>Navigation Menu</SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col gap-3">
                                <div className={"flex flex-col gap-3 pl-4"}>
                                    <Link href="/#about" onClick={() => setIsOpen(false)}
                                          className="text-foreground">About</Link>
                                    <Link href="/#skills" onClick={() => setIsOpen(false)}
                                          className="text-foreground">Skills</Link>
                                    <Link href="/#proficiencies" onClick={() => setIsOpen(false)}
                                          className="text-foreground">Proficiencies</Link>
                                    <Link href="/#projects" onClick={() => setIsOpen(false)}
                                          className="text-foreground">Projects</Link>
                                    <Link href="/#experience" onClick={() => setIsOpen(false)}
                                          className="text-foreground">Experience</Link>
                                    <Link href="/#contact" onClick={() => setIsOpen(false)}
                                          className="text-foreground">Contact</Link>
                                </div>
                                <div className="flex items-center gap-x-4 pl-4 pt-4 border-t">
                                    <Link href="https://github.com/tenchi-of-darkness" target="_blank" rel="noreferrer">
                                        <Icon className={"text-secondary size-6"} icon="line-md:github-twotone"/>
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/melanie-van-de-graaf/" target="_blank"
                                          rel="noreferrer">
                                        <Icon className={"text-secondary size-6"} icon="line-md:linkedin"/>
                                    </Link>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
        </header>
    );
}

export default NavBar;