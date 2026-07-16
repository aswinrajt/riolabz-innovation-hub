/** Decorative floating blobs — pure CSS animations, aria-hidden, safe on mobile. */
export function FloatingBlobs({ className }: { className?: string }) {
  return (
    <div aria-hidden className={"pointer-events-none absolute inset-0 overflow-hidden -z-10 " + (className ?? "")}>
      <span className="blob blob-a" />
      <span className="blob blob-b" />
      <span className="blob blob-c" />
    </div>
  );
}
