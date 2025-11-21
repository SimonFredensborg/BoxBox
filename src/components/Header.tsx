/// <reference types="vite-plugin-svgr/client" />

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";
import F1 from "@/assets/icons/f1.svg?react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="flex h-16 w-full items-center">
  <NavigationMenu className="flex" dir="rtl" orientation="horizontal">
    <NavigationMenuList className="flex gap-4">
      <NavigationMenuItem className="inline-flex">
      <NavigationMenuLink className="inline-flex items-center px-4 py-2" asChild>
        <Link to="/">
          test
        </Link>
      </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="inline-flex">
      <NavigationMenuLink className="inline-flex items-center px-4 py-2" asChild>
        <Link to="/">
          test2
        </Link>
      </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
    <NavigationMenuIndicator />
    <NavigationMenuViewport />

  </NavigationMenu>
</header>
)
    {/*}
    <header className="py-4">
      <div className="container">

        <nav className="hidden items-center justify-between lg:flex">
          <div className="flex items-center gap-6">

            <Link to="/" className="flex items-center gap-2">
              <F1 color="red" className="h-10 w-auto"/>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList className="flex flex-wrap gap-6 list-none p-0 m-0">
                  <NavigationMenuItem asChild>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link to="/Drivers">Drivers</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link to="/Teams">Teams</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </nav>
      </div>
    </header>
    */}





export default Header;
