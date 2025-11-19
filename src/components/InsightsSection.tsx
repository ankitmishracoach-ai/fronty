import { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function AnimatedNumber({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return <span ref={ref}>{count}</span>;
}

function AnimatedLineChart({ color, gradient, path, points }: {
  color: string;
  gradient: string;
  path: string;
  points: { x: number; y: number }[];
}) {
  const pathRef = useRef<SVGPathElement>(null);
  const fillRef = useRef<SVGPathElement>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const [activePoint, setActivePoint] = useState(-1);

  useEffect(() => {
    if (!isVisible) {
      setActivePoint(-1);
      return;
    }

    const interval = setInterval(() => {
      setActivePoint(prev => (prev + 1) % points.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [isVisible, points.length]);

  useEffect(() => {
    if (!isVisible || !pathRef.current || !fillRef.current) return;

    const pathLength = pathRef.current.getTotalLength();

    pathRef.current.style.strokeDasharray = `${pathLength}`;
    pathRef.current.style.strokeDashoffset = `${pathLength}`;
    fillRef.current.style.strokeDasharray = `${pathLength}`;
    fillRef.current.style.strokeDashoffset = `${pathLength}`;

    setTimeout(() => {
      if (pathRef.current && fillRef.current) {
        pathRef.current.style.transition = 'stroke-dashoffset 2s ease-out';
        pathRef.current.style.strokeDashoffset = '0';
        fillRef.current.style.transition = 'stroke-dashoffset 2s ease-out';
        fillRef.current.style.strokeDashoffset = '0';
      }
    }, 100);
  }, [isVisible]);

  return (
    <div ref={ref} className="relative">
      <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
        <defs>
          <linearGradient id={gradient} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          ref={fillRef}
          d={`${path} L 400 150 L 0 150 Z`}
          fill={`url(#${gradient})`}
        />
        <path
          ref={pathRef}
          d={path}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {points.map((point, i) => (
          <g key={i}>
            <circle
              cx={point.x}
              cy={point.y}
              r={activePoint === i ? 6 : 4}
              fill={color}
              className="transition-all duration-300"
              style={{
                filter: activePoint === i ? `drop-shadow(0 0 8px ${color})` : 'none'
              }}
            />
            {activePoint === i && (
              <circle
                cx={point.x}
                cy={point.y}
                r={10}
                fill={color}
                opacity="0.2"
                className="animate-ping"
              />
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}

function AnimatedBar({ height, color, delay }: { height: number; color: string; delay: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const [currentHeight, setCurrentHeight] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCurrentHeight(0);
      return;
    }

    setTimeout(() => {
      setCurrentHeight(height);
    }, delay);
  }, [isVisible, height, delay]);

  return (
    <div ref={ref} className="w-full relative" style={{ height: '100px' }}>
      <div
        className={`absolute bottom-0 w-full rounded-t-xl transition-all duration-1000 ease-out cursor-pointer hover:brightness-110 shadow-lg`}
        style={{
          height: `${currentHeight}%`,
          background: `linear-gradient(to top, ${color}, ${color}dd)`,
          boxShadow: currentHeight > 0 ? `0 -4px 20px -4px ${color}` : 'none'
        }}
      ></div>
    </div>
  );
}

export default function InsightsSection() {
  const responseTimePoints = [
    { x: 0, y: 120 },
    { x: 57, y: 100 },
    { x: 114, y: 80 },
    { x: 171, y: 90 },
    { x: 228, y: 60 },
    { x: 285, y: 70 },
    { x: 342, y: 40 },
    { x: 400, y: 50 }
  ];

  const ticketVolumePoints = [
    { x: 0, y: 100 },
    { x: 57, y: 110 },
    { x: 114, y: 90 },
    { x: 171, y: 70 },
    { x: 228, y: 85 },
    { x: 285, y: 65 },
    { x: 342, y: 75 },
    { x: 400, y: 60 }
  ];

  return (
    <section id="insights" className="py-32 px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-slate-900 mb-8" style={{ letterSpacing: '-0.025em' }}>
            Insights that keep teams moving.
          </h2>
          <p className="text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal mb-12">
            Clarity without clutter.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-xl text-slate-600 leading-relaxed text-center font-normal">
            See what matters: workloads, response times, AI impact, trends.<br />
            Clean charts. Clear patterns. Nothing overwhelming.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-bold text-slate-900">Response Time</h3>
              <div className="text-xs text-gray-500">Last 7 days</div>
            </div>

            <div className="h-48 relative">
              <AnimatedLineChart
                color="#3b82f6"
                gradient="gradient1"
                path="M 0 120 L 57 100 L 114 80 L 171 90 L 228 60 L 285 70 L 342 40 L 400 50"
                points={responseTimePoints}
              />
              <div className="absolute top-0 left-0 right-0 flex items-start justify-between text-xs text-gray-400">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-xs text-gray-600">Avg: 2.4h</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs text-green-600">↓ 18%</div>
              </div>
            </div>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-bold text-slate-900">Ticket Volume</h3>
              <div className="text-xs text-gray-500">Last 7 days</div>
            </div>

            <div className="h-48 relative">
              <AnimatedLineChart
                color="#8b5cf6"
                gradient="gradient2"
                path="M 0 100 L 57 110 L 114 90 L 171 70 L 228 85 L 285 65 L 342 75 L 400 60"
                points={ticketVolumePoints}
              />
              <div className="absolute top-0 left-0 right-0 flex items-start justify-between text-xs text-gray-400">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-xs text-gray-600">Total: <AnimatedNumber target={234} /></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs text-green-600">↓ 12%</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-bold text-slate-900">AI Impact by Category</h3>
              <div className="text-xs text-gray-500">This month</div>
            </div>

            <div className="flex items-end gap-3 h-32">
              {[
                { label: 'Billing', height: 75, color: '#3b82f6' },
                { label: 'Technical', height: 90, color: '#8b5cf6' },
                { label: 'General', height: 60, color: '#10b981' },
                { label: 'Account', height: 45, color: '#f97316' },
                { label: 'Sales', height: 55, color: '#ec4899' }
              ].map((item, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <AnimatedBar height={item.height} color={item.color} delay={i * 150} />
                  <span className="text-xs text-gray-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
