'use client';

import Image from 'next/image';

const venueDetails: any = {
  '001': { name: "The Bloom Pavilion", imgSrc: "/img/bloom.jpg" },
  '002': { name: "Spark Space", imgSrc: "/img/spark-space.jpg" },
  '003': { name: "The Grand Table", imgSrc: "/img/grand-table.jpg" },
};

export default function VenueDetail({ params }: { params: { vid: string } }) {
  const venue = venueDetails[params.vid];

  if (!venue) return <div>Venue not found.</div>;

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{venue.name}</h1>
      <Image src={venue.imgSrc} alt={venue.name} width={600} height={400} />
    </main>
  );
}
