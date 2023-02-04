'use client';

import styles from './SideBar.module.scss'
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import DescriptionIcon from '@mui/icons-material/Description';
import { useRouter } from 'next/navigation';
import { routes } from '@/utils/config.utils';

export default function SideBar() {
  const router = useRouter();

  const route = (path: string) => {
    router.push(path);
  }

  return <div className={styles.sidebar}>
    <div>
      <HomeIcon className={styles.homeIcon} onClick={() => route(routes.home)} />
      <DescriptionIcon onClick={() => route(routes.budget)} />
    </div>
    <div>
      <SettingsIcon onClick={() => route(routes.settings)} />
      <LogoutIcon onClick={() => null} />
    </div>
  </div>
}