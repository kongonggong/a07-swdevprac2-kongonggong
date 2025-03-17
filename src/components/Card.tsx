import React from 'react';
import Image from 'next/image';

interface CardProps {
  venueName: string;
  imgSrc?: string;
}

export default function Card({ venueName, imgSrc }: CardProps) {
  return (
    <div style={{ position: 'relative', width: '350px', height: '200px' }}>
      {imgSrc && (
        <Image 
          src={imgSrc} 
          alt={venueName} 
          fill 
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 600px) 100vw, 350px"
        />
      )}
      <div style={{position: 'absolute', bottom: 0, left: 0, padding: '10px', background: 'rgba(0,0,0,0.5)', color: 'white'}}>
        {venueName}
      </div>
    </div>
  );
}
