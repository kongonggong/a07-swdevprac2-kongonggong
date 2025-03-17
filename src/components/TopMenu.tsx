import React from 'react';
import TopMenuItem from './TopMenuItem';
import Image from 'next/image';
import styles from './TopMenu.module.css'; // Import CSS module

export default function TopMenu() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navRight}>
        <TopMenuItem label="Booking" href="/booking" />
        <Image src="/img/logo.png" alt="Logo" width={50} height={50} />
      </div>
    </nav>
  );
}
