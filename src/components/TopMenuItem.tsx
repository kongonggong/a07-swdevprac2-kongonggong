import React from 'react';
import Link from 'next/link';

interface TopMenuItemProps {
  label: string;
  href: string;
}

export default function TopMenuItem({ label, href }: TopMenuItemProps) {
  return (
    <li>
      <Link href={href} className="text-white hover:text-gray-300">
        {label}
      </Link>
    </li>
  );
}