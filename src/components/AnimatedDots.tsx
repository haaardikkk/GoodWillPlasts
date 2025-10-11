import { useMemo } from "react";

type Dot = {
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
};

const AnimatedDots = ({ count = 28 }: { count?: number }) => {
  const dots: Dot[] = useMemo(() => {
    return Array.from({ length: count }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 3 + 2, // 2px - 5px
      delay: Math.random() * 8,
      duration: Math.random() * 10 + 8, // 8s - 18s
      opacity: Math.random() * 0.35 + 0.1,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      <style>
        {`
        @keyframes dotFloat {
          0% { transform: translateY(0) }
          50% { transform: translateY(-10px) }
          100% { transform: translateY(0) }
        }
        .dot {
          position: absolute;
          border-radius: 9999px;
          background: rgba(2, 132, 199, 0.6);
          filter: blur(0.2px);
        }
      `}
      </style>
      {dots.map((d, idx) => (
        <span
          key={idx}
          className="dot"
          style={{
            top: `${d.top}%`,
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            animation: `dotFloat ${d.duration}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedDots;