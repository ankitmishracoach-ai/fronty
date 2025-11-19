import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'hover' | 'gradient';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export default function Card({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  onClick,
}: CardProps) {
  const baseClasses = 'bg-white rounded-2xl border-2 transition-all duration-300';

  const variantClasses = {
    default: 'border-slate-200',
    hover: 'border-slate-200 hover:border-slate-900 hover:shadow-xl hover:-translate-y-1 cursor-pointer',
    gradient: 'border-slate-200 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden group',
  };

  const paddingClasses = {
    sm: 'p-6',
    md: 'p-8',
    lg: 'p-10',
  };

  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </div>
  );
}
