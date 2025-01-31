import ProfileViewPage from '@/features/profile/components/profile-view-page';
import type { SearchParams } from 'nuqs/server';

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export const metadata = {
  title: 'Dashboard : Profile'
};

export default async function Page({ searchParams }: pageProps) {
  return <ProfileViewPage />;
}
