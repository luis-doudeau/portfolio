import { ExternalLink } from "lucide-react";

type Props = {
  lat: number;
  lng: number;
  label: string;
  zoom?: number;
};

/**
 * Lightweight OpenStreetMap embed (no API key, no JS lib).
 * The `bbox` defines the visible area; the marker is the pin.
 */
export function MapEmbed({ lat, lng, label, zoom = 0.012 }: Props) {
  const bbox = [lng - zoom, lat - zoom * 0.6, lng + zoom, lat + zoom * 0.6].join(",");
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
  const externalHref = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=15/${lat}/${lng}`;

  return (
    <div className="rounded-2xl border border-line overflow-hidden bg-cream">
      <iframe
        src={src}
        title={`Map · ${label}`}
        loading="lazy"
        className="w-full h-64 sm:h-80 block"
        style={{
          // Slightly desaturate to fit the design
          filter: "grayscale(0.2) contrast(0.95)",
        }}
      />
      <div className="flex items-center justify-between p-3 border-t border-line text-xs">
        <span className="font-mono text-muted">📍 {label}</span>
        <a
          href={externalHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-accent hover:underline"
        >
          OpenStreetMap
          <ExternalLink className="size-3" />
        </a>
      </div>
    </div>
  );
}
