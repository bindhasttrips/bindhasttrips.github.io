import Dashboard from '@/components/Dashboard';

export const metadata = {
  title: 'Dashboard',
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <Dashboard />;
}
