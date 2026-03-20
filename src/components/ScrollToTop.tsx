"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Automatically scrolls to top on every route change.
 * Must be rendered inside the root layout as a client component.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
