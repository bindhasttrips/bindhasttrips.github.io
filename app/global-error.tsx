'use client';

/**
 * Last resort, for a failure in the root layout itself. It has to render its
 * own html and body, so it cannot use anything from the normal layout.
 */
export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en-IN">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          background: '#FDFAF6',
          color: '#1B1713',
          fontFamily: 'system-ui, -apple-system, Segoe UI, sans-serif',
          padding: '2rem',
        }}
      >
        <div style={{ maxWidth: '28rem' }}>
          <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Something went wrong</h1>
          <p style={{ lineHeight: 1.6, color: '#3D362E' }}>
            This is usually an old copy of the site left in your browser. Reloading normally
            fixes it.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            style={{
              marginTop: '1rem',
              minHeight: '3rem',
              padding: '0 1.5rem',
              borderRadius: '999px',
              border: 0,
              background: '#C4551F',
              color: '#fff',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            Reload the page
          </button>
          <p style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: '#6B6053' }}>
            Or message us on WhatsApp and we will sort it out.
          </p>
        </div>
      </body>
    </html>
  );
}
