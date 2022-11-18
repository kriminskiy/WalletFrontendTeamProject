import { Outlet } from 'react-router-dom';

export function DashboardPage() {
  return (
    <div>
      <h2> DashboardPage</h2>
      <Outlet />
    </div>
  );
}
