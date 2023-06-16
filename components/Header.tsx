// Import the necessary icons and components
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "./YourFancyDropdownMenu";

// ...

const Header = ({ menu }: HeaderProps) => {
  // ...

  return (
    <div className="flex items-center justify-between space-x-2 font-bold sticky top-0 z-50">
      {/* ... */}

      <div className="flex items-center justify-end w-full md:hidden">
        {/* ... */}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="text-2xl text-black hover:text-gray-500"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <ChevronDownIcon className="w-6 h-6 pr-2 hover:text-amber-800" style={{ color: "#111111" }} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {menu.items.map((item: MenuItem) => (
              <DropdownMenuItem key={item._key} onClick={() => scroll2El(item.title)}>
                {item.title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
