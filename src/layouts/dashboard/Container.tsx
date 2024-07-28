import React from 'react';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { paths } from '@/routes/paths';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ContainerProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  actions?: React.ReactNode;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ title, breadcrumbs, actions, children }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">{title}</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href={paths.dashboard.root}>Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              {breadcrumbs.length > 2 && (
                <>
                  <BreadcrumbItem>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-1">
                        <BreadcrumbEllipsis className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start">
                        {breadcrumbs.slice(0, -2).map((item, index) => (
                          <DropdownMenuItem key={index}>
                            <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </>
              )}
              {breadcrumbs.slice(-2, -1).map((item, index) => (
                <React.Fragment key={index}>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </React.Fragment>
              ))}
              <BreadcrumbItem>
                <BreadcrumbPage>{breadcrumbs[breadcrumbs.length - 1].label}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        {actions && <div className="flex space-x-2">{actions}</div>}
      </div>
      {children}
    </div>
  );
};

export default Container;
