'use client';
import { useEffect } from 'react';
import { initSite } from '@/lib/site-engine';
import { initArcade } from '@/lib/arcade-engine';

export default function SiteScripts({ section, arcade }) {
  useEffect(() => {
    document.body.dataset.page = section;
    initSite();
    if (arcade) initArcade();
  }, [section, arcade]);
  return null;
}
