'use client';

import React, { useState } from 'react';
import styles from './banner.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const images = ["/img/cover.jpg", "/img/cover2.jpg", "/img/cover3.jpg", "/img/cover4.jpg"];

export default function Banner() {
  const [currentImg, setCurrentImg] = useState(0);
  const router = useRouter();

  const nextImage = () => setCurrentImg((currentImg + 1) % images.length);
  const navigateToVenue = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push('/venueinfo/venue');
  };

  return (
    <div className={styles.banner} onClick={nextImage} style={{ position: 'relative', width: '100%', height: '500px' }}>
      <Image
        src={images[currentImg]}
        alt="Banner Image"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <div className={styles.bannerContent}>
        <h1 className={styles.bannerText}>where every event finds its venue</h1>
        <p className={styles.bannerSubText}>
          Experience exceptional venues for all your events.
        </p>
        <button
          style={{
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '8px',
            padding: '10px 20px',
            cursor: 'pointer',
            marginTop: '15px'
          }}
          onClick={navigateToVenue}>
          Select Venue
        </button>
      </div>
    </div>
  );
}
