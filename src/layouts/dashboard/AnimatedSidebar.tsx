import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Home, Users, Folder, FileText, Mail, Settings, Menu, X } from 'lucide-react';
import Link from 'next/link';
import siteMetadata from '@/config/siteMetadata';
import { paths } from '@/routes/paths';

const menuItems = [
  { icon: Home, label: 'Dashboard', href: paths.dashboard.root },
  { icon: Users, label: 'Users', href: paths.dashboard.users.root() },
  { icon: Folder, label: 'Projects', href: paths.dashboard.projects.root() },
  { icon: FileText, label: 'Blog', href: paths.dashboard.blog.root() },
  { icon: Mail, label: 'Contact', href: paths.dashboard.contacts.root() },
  { icon: Settings, label: 'Settings', href: paths.dashboard.settings.root() },
];

export default function Sidebar({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      <div className="lg:hidden">
        <button onClick={toggleSidebar} className="p-2 m-2 text-gray-500 hover:text-gray-600">
          <Menu size={24} />
        </button>
      </div>
      <AnimatePresence>
        {(isOpen || (typeof window !== 'undefined' && window.innerWidth >= 1024)) && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white p-4 lg:static lg:translate-x-0 ${
              isOpen ? 'block' : 'hidden lg:block'
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{siteMetadata.title}</h2>
              <button onClick={toggleSidebar} className="lg:hidden text-gray-300 hover:text-white">
                <X size={24} />
              </button>
            </div>
            <nav>
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-2 p-2 rounded-lg ${
                        pathname === item.href ? 'bg-gray-700' : 'hover:bg-gray-700'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
