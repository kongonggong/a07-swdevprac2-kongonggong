// src/components/CardPanel.tsx
'use client';

import React, { useReducer, useRef, useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import InteractiveCard from './InteractiveCard';
import Card from './Card';
import styles from './cardpanel.module.css';
import Link from 'next/link';

const venues = [
  { vid: '001', name: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg", videoSrc: "/videos/bloom.mp4" },
  { vid: '002', name: "Spark Space", imgSrc: "/img/spark-space.jpg", videoSrc: "/videos/spark-space.mp4" },
  { vid: '003', name: "The Grand Table", imgSrc: "/img/grand-table.jpg", videoSrc: "/videos/grand-table.mp4" },
];

interface VenueRating {
  [key: string]: number;
}

type Action =
  | { type: 'update'; venue: string; rating: number }
  | { type: 'remove'; venue: string };

const reducer = (state: VenueRating, action: Action): VenueRating => {
  switch (action.type) {
    case 'update':
      return { ...state, [action.venue]: action.rating };
    case 'remove':
      const newState = { ...state };
      delete newState[action.venue];
      return newState;
    default:
      return state;
  }
};

export default function CardPanel() {
  const [ratings, dispatch] = useReducer(reducer, {
    "The Bloom Pavilion": 0,
    "Spark Space": 0,
    "The Grand Table": 0,
  });

  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const [playing, setPlaying] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    venues.forEach((venue) => {
      if (!videoRefs.current[venue.vid]) {
        videoRefs.current[venue.vid] = null;
      }
    });
  }, []);

  const togglePlay = (vid: string, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`🟢 Play button clicked for: ${vid}`);

    setPlaying((prev) => {
      const isPlaying = !prev[vid];

      if (isPlaying) {
        setTimeout(() => {
          const video = videoRefs.current[vid];
          if (video) {
            console.log(`▶️ Playing video: ${vid}`);
            video.play();
          } else {
            console.error(`❌ Video ref is null for: ${vid}`);
          }
        }, 100); // Small delay to ensure rendering happens
      }

      return { ...prev, [vid]: isPlaying };
    });
  };

  return (
    <div>
      <div className={styles.cardContainer}>
        {venues.map((venue) => (
          <InteractiveCard key={venue.vid}>
            <div className={styles.cardHorizontal}>

              {/* ✅ Image OR Video Section */}
              <div style={{ position: 'relative' }}>
                {venue.videoSrc && playing[venue.vid] ? (
                  <video
                    width="100%"
                    height="auto"
                    ref={(el) => {
                      if (el) {
                        console.log(`✅ Setting video ref for: ${venue.vid}`);
                        videoRefs.current[venue.vid] = el;
                      }
                    }}
                    src={venue.videoSrc}
                    controls
                  />
                ) : (
                  <Link href={`/venueinfo/venue/${venue.vid}`} passHref>
                    <Card venueName={venue.name} imgSrc={venue.imgSrc} />
                  </Link>
                )}
              </div>

              {/* ✅ Rating & Play Button Section */}
              <div className={styles.cardRating}>
                <Rating
                  id={`${venue.name} Rating`}
                  name={`${venue.name} Rating`}
                  data-testid={`${venue.name} Rating`}
                  value={ratings[venue.name] || 0}
                  onChange={(e, newValue) => dispatch({ type: 'update', venue: venue.name, rating: newValue || 0 })}
                  onClick={(e) => e.stopPropagation()}
                />
                {venue.videoSrc && (
                  <div style={{ marginTop: '10px' }}>
                    <button
                      style={{
                        padding: '8px 12px',
                        backgroundColor: '#000',
                        color: '#fff',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        marginTop: '10px',
                        position: 'relative',
                        zIndex: 10,
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log(`🟢 Play button clicked for: ${venue.vid}`);
                        togglePlay(venue.vid, e);
                      }}
                    >
                      {playing[venue.vid] ? 'Pause' : 'Play'}
                    </button>
                  </div>
                )}
              </div>

            </div>
          </InteractiveCard>
        ))}
      </div>
    </div>
  );
}
