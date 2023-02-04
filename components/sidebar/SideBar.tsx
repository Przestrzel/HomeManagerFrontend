'use client';

import styles from './SideBar.module.scss'
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import DescriptionIcon from '@mui/icons-material/Description';
import Link from 'next/link';
import { routes } from '@/utils/config.utils';

export default function SideBar() {
  return <div className={styles.sidebar}>
    <div>
      <Link href={routes.home}>
        <HomeIcon className={styles.homeIcon} />
      </Link>
      <Link href={routes.budget}>
        <DescriptionIcon />
      </Link>
    </div>
    <div>
      <Link href={routes.settings}>
        <SettingsIcon />
      </Link>
      <LogoutIcon onClick={() => null} />
    </div>
  </div>
}