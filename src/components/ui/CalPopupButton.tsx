"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

interface CalPopupButtonProps {
  calLink: string;
  children: React.ReactNode;
  className?: string;
}

export function CalPopupButton({
  calLink,
  children,
  className,
}: CalPopupButtonProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#32CD32" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <button
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {children}
    </button>
  );
}
