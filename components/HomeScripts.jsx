'use client';
import { useEffect } from 'react';
import { initHome } from '@/lib/home-engine';

export default function HomeScripts() {
  useEffect(() => {
    document.body.dataset.page = 'home';
    initHome();
  }, []);
  return null;
}
