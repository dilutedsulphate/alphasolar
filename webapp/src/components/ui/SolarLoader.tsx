import { useState, useEffect } from "react";

interface SolarLoaderProps {
  onLoadComplete: () => void;
}

export function SolarLoader({ onLoadComplete }: SolarLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // 3-4 second loading animation
    const duration = 3500; // 3.5 seconds
    const interval = 35; // Update every 35ms
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsExiting(true);
          setTimeout(onLoadComplete, 500);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-500 ${
        isExiting ? "opacity-0 scale-110" : "opacity-100 scale-100"
      }`}
      style={{
        background: "linear-gradient(135deg, hsl(var(--background)) 0%, hsl(222 47% 8%) 50%, hsl(var(--background)) 100%)",
      }}
    >
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Radial gradient glow behind sun */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(var(--energy)) 0%, transparent 70%)",
          animation: "pulse 2s ease-in-out infinite",
        }}
      />

      <div className="relative flex flex-col items-center gap-8">
        {/* Solar System Animation */}
        <div className="relative w-64 h-64">
          {/* Outer orbit ring */}
          <div
            className="absolute inset-0 rounded-full border border-primary/20"
            style={{ animation: "spin 20s linear infinite" }}
          />

          {/* Middle orbit ring */}
          <div
            className="absolute inset-8 rounded-full border border-energy/25"
            style={{ animation: "spin 15s linear infinite reverse" }}
          />

          {/* Inner orbit ring */}
          <div
            className="absolute inset-16 rounded-full border border-accent/30"
            style={{ animation: "spin 10s linear infinite" }}
          />

          {/* Rotating sun rays - outer */}
          <div
            className="absolute inset-0"
            style={{ animation: "spin 8s linear infinite" }}
          >
            {[...Array(12)].map((_, i) => (
              <div
                key={`ray-outer-${i}`}
                className="absolute top-1/2 left-1/2 origin-bottom"
                style={{
                  transform: `rotate(${i * 30}deg) translateX(-50%)`,
                  width: "3px",
                  height: "80px",
                  background: `linear-gradient(to top, hsl(var(--energy)) 0%, transparent 100%)`,
                  opacity: 0.4,
                  borderRadius: "2px",
                }}
              />
            ))}
          </div>

          {/* Rotating sun rays - inner */}
          <div
            className="absolute inset-0"
            style={{ animation: "spin 6s linear infinite reverse" }}
          >
            {[...Array(8)].map((_, i) => (
              <div
                key={`ray-inner-${i}`}
                className="absolute top-1/2 left-1/2 origin-bottom"
                style={{
                  transform: `rotate(${i * 45 + 22.5}deg) translateX(-50%)`,
                  width: "2px",
                  height: "50px",
                  background: `linear-gradient(to top, hsl(var(--primary)) 0%, transparent 100%)`,
                  opacity: 0.6,
                  borderRadius: "2px",
                }}
              />
            ))}
          </div>

          {/* Orbiting planet 1 - outer */}
          <div
            className="absolute inset-0"
            style={{ animation: "spin 4s linear infinite" }}
          >
            <div
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full shadow-lg"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.6) 100%)",
                boxShadow: "0 0 15px hsl(var(--primary)/0.5)",
              }}
            />
          </div>

          {/* Orbiting planet 2 - middle */}
          <div
            className="absolute inset-8"
            style={{ animation: "spin 3s linear infinite reverse" }}
          >
            <div
              className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full shadow-lg"
              style={{
                background: "linear-gradient(135deg, hsl(var(--energy)) 0%, hsl(var(--energy)/0.6) 100%)",
                boxShadow: "0 0 12px hsl(var(--energy)/0.5)",
              }}
            />
          </div>

          {/* Orbiting planet 3 - inner */}
          <div
            className="absolute inset-16"
            style={{ animation: "spin 2s linear infinite" }}
          >
            <div
              className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full shadow-lg"
              style={{
                background: "linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--accent)/0.6) 100%)",
                boxShadow: "0 0 10px hsl(var(--accent)/0.5)",
              }}
            />
          </div>

          {/* Central Sun */}
          <div className="absolute inset-20 rounded-full overflow-hidden">
            {/* Sun core with gradient */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle at 30% 30%, hsl(45 100% 70%) 0%, hsl(var(--energy)) 40%, hsl(var(--primary)) 100%)",
                animation: "pulse 1.5s ease-in-out infinite",
              }}
            />

            {/* Sun surface texture */}
            <div
              className="absolute inset-0 rounded-full opacity-50"
              style={{
                background: "radial-gradient(circle at 60% 40%, transparent 0%, hsl(var(--primary)/0.3) 100%)",
              }}
            />

            {/* Sun glow */}
            <div
              className="absolute -inset-4 rounded-full"
              style={{
                background: "radial-gradient(circle, hsl(var(--energy)/0.4) 0%, transparent 70%)",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
          </div>

          {/* Energy particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`energy-${i}`}
              className="absolute w-2 h-2 rounded-full"
              style={{
                top: "50%",
                left: "50%",
                background: `hsl(var(--energy))`,
                boxShadow: `0 0 8px hsl(var(--energy))`,
                animation: `particleOrbit${(i % 3) + 1} ${2 + i * 0.3}s linear infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center">
          <img
            src="/alpha-solar-power-logo--3-.png"
            alt="Alpha Solar Power"
            className="h-20 w-auto object-contain drop-shadow-lg"
            style={{
              filter: "drop-shadow(0 0 20px hsl(var(--energy)/0.3))",
            }}
          />
        </div>

        {/* Progress section */}
        <div className="flex flex-col items-center gap-3 w-64">
          {/* Progress bar container */}
          <div className="w-full h-2 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
            <div
              className="h-full rounded-full transition-all duration-100 relative overflow-hidden"
              style={{
                width: `${progress}%`,
                background: "linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--energy)) 50%, hsl(var(--accent)) 100%)",
              }}
            >
              {/* Shimmer effect on progress bar */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                  animation: "shimmer 1s linear infinite",
                }}
              />
            </div>
          </div>

          {/* Loading text with percentage */}
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">
              Harnessing Solar Energy
            </p>
            <span className="text-sm font-semibold text-primary">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </div>

      {/* Custom keyframes */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes shimmer {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }
        @keyframes particleOrbit1 {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(60px) rotate(0deg); opacity: 1; }
          50% { opacity: 0.5; }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(60px) rotate(-360deg); opacity: 1; }
        }
        @keyframes particleOrbit2 {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(80px) rotate(0deg); opacity: 0.8; }
          50% { opacity: 0.4; }
          100% { transform: translate(-50%, -50%) rotate(-360deg) translateX(80px) rotate(360deg); opacity: 0.8; }
        }
        @keyframes particleOrbit3 {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(100px) rotate(0deg); opacity: 0.6; }
          50% { opacity: 0.3; }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(100px) rotate(-360deg); opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
