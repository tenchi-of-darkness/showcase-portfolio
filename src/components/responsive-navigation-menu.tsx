"use client"

import React, {ComponentProps} from 'react';
import {NavigationMenu} from "@/components/ui/navigation-menu";
import {useIsMobile} from "@/hooks/use-mobile";

function ResponsiveNavigationMenu(props: Omit<ComponentProps<typeof NavigationMenu>, "viewport">) {
    const isMobile = useIsMobile()

    return (
        <NavigationMenu viewport={isMobile} {...props}/>
    );
}

export default ResponsiveNavigationMenu;