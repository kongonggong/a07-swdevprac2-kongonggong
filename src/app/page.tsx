// src/app/page.tsx
'use client';

import React from 'react';
import Banner from '@/components/Banner';
import CardPanel from '@/components/CardPanel';

export default function Page() {
  return (
    <main>
      <Banner />
      <CardPanel />
    </main>
  );
}
