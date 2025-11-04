// src/components/ui/main-nav.tsx

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {Link} from "react-router-dom"; 

const Header = ({}) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/drivers">
            <NavigationMenuLink className={cn("px-4 py-2 text-sm font-medium hover:text-primary")}>
              Drivers
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/teams">
            <NavigationMenuLink className={cn("px-4 py-2 text-sm font-medium hover:text-primary")}>
              Teams
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/seasons">
            <NavigationMenuLink className={cn("px-4 py-2 text-sm font-medium hover:text-primary")}>
              Seasons
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/results">
            <NavigationMenuLink className={cn("px-4 py-2 text-sm font-medium hover:text-primary")}>
              Results
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/standings">
            <NavigationMenuLink className={cn("px-4 py-2 text-sm font-medium hover:text-primary")}>
              Standings
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/circuits">
            <NavigationMenuLink className={cn("px-4 py-2 text-sm font-medium hover:text-primary")}>
              Circuits
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/races">
            <NavigationMenuLink className={cn("px-4 py-2 text-sm font-medium hover:text-primary")}>
              Races
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Header;