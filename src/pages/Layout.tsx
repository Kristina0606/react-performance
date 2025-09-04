import type { FC } from 'react';
import { Outlet } from 'react-router';

const Layout: FC = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-4">
      <Outlet />
    </div>
  );
};

export default Layout;
