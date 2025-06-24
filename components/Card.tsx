import type { CardProps } from '@/types'

export default function Card({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
}: CardProps) {
  const baseClasses = 'rounded-2xl transition-all duration-300'
  
  const variants = {
    default: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-lg hover:shadow-xl border border-gray-100',
    outlined: 'bg-white border-2 border-gray-300 hover:border-blue-300',
  }
  
  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${paddings[padding]} ${className}`
  
  return (
    <div className={classes}>
      {children}
    </div>
  )
}