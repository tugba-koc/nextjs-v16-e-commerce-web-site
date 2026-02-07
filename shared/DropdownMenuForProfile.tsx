import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { UserRound } from 'lucide-react';
import { PROFILE_TAB_DROPDOWN_MENUS } from './constant';
import { ProfileTabDropDownMenuType } from './type';

export function DropdownMenuForProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='sm'>
          <UserRound />
          <span className='font-medium text-sm text-gray-800'>Hesabım</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-60' align='center'>
        <DropdownMenuGroup>
          {PROFILE_TAB_DROPDOWN_MENUS.map(
            (dropdownMenu: ProfileTabDropDownMenuType) => (
              <DropdownMenuItem className='my-4' key={dropdownMenu.key}>
                <dropdownMenu.icon />
                {dropdownMenu.label}
              </DropdownMenuItem>
            ),
          )}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
