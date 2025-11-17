/// <reference types="vite-plugin-svgr/client" />

// src/components/ui/Header.tsx
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import F1 from "@/assets/icons/f1.svg?react";
import { Link } from "react-router-dom";
import '@/styles/navbar.css'

const Header = () => {
  return (
    <header className="w-full bg-background border-b shadow-sm sticky top-0 z-50">
      <div className="navbar-left max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2">
          <F1 className="h-10 w-auto text-red-500" /> {/* Tailwind color */}
        </Link>

        {/* Right: Navigation menu */}
        <NavigationMenu>
          <NavigationMenuList className="navbar-right flex gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/drivers" className={cn("px-4 py-2 text-sm font-medium hover:text-primary")}>
                  Drivers
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/teams" className={cn("px-4 py-2 text-sm font-medium hover:text-primary")}>
                  Teams
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/seasons" className={cn("px-4 py-2 text-sm font-medium hover:text-primary")}>
                  Seasons
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/results" className={cn("px-4 py-2 text-sm font-medium hover:text-primary")}>
                  Results
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/standings" className={cn("px-4 py-2 text-sm font-medium hover:text-primary")}>
                  Standings
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/circuits" className={cn("px-4 py-2 text-sm font-medium hover:text-primary")}>
                  Circuits
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/races" className={cn("px-4 py-2 text-sm font-medium hover:text-primary")}>
                  Races
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;
