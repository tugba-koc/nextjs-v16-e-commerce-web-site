import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserRound } from "lucide-react";
import { PROFILE_TAB_DROPDOWN_MENUS } from "./constant";
import { ProfileTabDropDownMenuType } from "./type";
import Link from "next/link";

export function DropdownMenuForProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="btn-primary" variant="ghost" size="sm">
          <UserRound />
          <span className="font-medium text-sm text-gray-800">Hesabım</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60" align="center">
        <DropdownMenuGroup>
          {PROFILE_TAB_DROPDOWN_MENUS.map(
            (dropdownMenu: ProfileTabDropDownMenuType) => (
              <Link key={dropdownMenu.key} href={dropdownMenu.link}>
                <DropdownMenuItem className="my-4">
                  <dropdownMenu.icon />
                  {dropdownMenu.label}
                </DropdownMenuItem>
              </Link>
            ),
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
