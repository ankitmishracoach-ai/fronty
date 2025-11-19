interface SkeletonLoaderProps {
  variant?: 'text' | 'card' | 'chart';
  count?: number;
}

export default function SkeletonLoader({ variant = 'text', count = 1 }: SkeletonLoaderProps) {
  const baseClasses = 'animate-pulse bg-slate-200 rounded';

  const variants = {
    text: 'h-4 w-full',
    card: 'h-32 w-full',
    chart: 'h-64 w-full',
  };

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`${baseClasses} ${variants[variant]} mb-4`} />
      ))}
    </>
  );
}
