// Drop-in placeholder — replace src with your actual image path
export default function ImgPlaceholder({ width, height, label, className, style, round }) {
  return (
    <div
      className={className}
      style={{
        width,
        height,
        borderRadius: round ? '50%' : '8px',
        background: '#e8e8e8',
        border: '2px dashed #bbb',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#888',
        fontSize: '0.72rem',
        fontFamily: 'monospace',
        textAlign: 'center',
        flexShrink: 0,
        overflow: 'hidden',
        ...style,
      }}
    >
      <span style={{ fontSize: '1.4rem', marginBottom: 4 }}>🖼</span>
      <span style={{ fontWeight: 600 }}>{width} × {height}</span>
      {label && <span style={{ marginTop: 2, opacity: 0.7 }}>{label}</span>}
    </div>
  );
}
