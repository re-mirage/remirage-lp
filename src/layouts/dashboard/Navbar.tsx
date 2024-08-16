import { Logout } from '@/auth/actions/logout';
import { useUser } from '@/auth/hooks/useUser';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { paths } from '@/routes/paths';
import { ChevronDown, LogOut, Settings, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();
  const { user } = useUser();

  return (
    <nav className="bg-white shadow-md p-4 flex justify-end items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center space-x-2 focus:outline-none">
            <Avatar>
              <AvatarImage src={user?.avatar} alt={user?.first_name} />
              <AvatarFallback>
                {user?.first_name?.charAt(0)} {user?.last_name?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <ChevronDown size={20} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="hover:cursor-pointer"
            onClick={() => router.push(paths.dashboard.settings.profile())}
          >
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="hover:cursor-pointer"
            onClick={() => router.push(paths.dashboard.settings.root())}
          >
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:cursor-pointer" onClick={async () => await Logout()}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
