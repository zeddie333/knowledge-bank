// Greek/Roman temple logo — pediment, three Doric columns on a stylobate.
// Strictly monochrome; uses currentColor so it inherits the surrounding text.

import * as React from "react";

export function TempleLogo({
  className,
  strokeWidth = 2,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 120 96"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      fill="none"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
    >
      {/* Pediment (triangular gable) */}
      <polyline points="8,30 60,6 112,30" />
      <line x1="8" y1="30" x2="112" y2="30" />
      {/* Frieze / architrave (two horizontal bands above the columns) */}
      <line x1="14" y1="34" x2="106" y2="34" />
      <line x1="14" y1="40" x2="106" y2="40" />
      {/* Three Doric columns: capital tab, shaft (with subtle fluting marks), base */}
      {[24, 60, 96].map((cx) => (
        <g key={cx}>
          {/* Capital */}
          <rect x={cx - 8} y={40} width={16} height={4} />
          {/* Shaft */}
          <line x1={cx - 5} y1={44} x2={cx - 5} y2={82} />
          <line x1={cx} y1={44} x2={cx} y2={82} />
          <line x1={cx + 5} y1={44} x2={cx + 5} y2={82} />
          {/* Base */}
          <rect x={cx - 8} y={82} width={16} height={4} />
        </g>
      ))}
      {/* Stylobate (stepped base) */}
      <line x1="4" y1="86" x2="116" y2="86" />
      <line x1="0" y1="92" x2="120" y2="92" />
    </svg>
  );
}
