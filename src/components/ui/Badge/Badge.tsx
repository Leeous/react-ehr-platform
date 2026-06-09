interface BadgeProps {
  label: string;
  variant?: 'info' | 'critical' | 'success';
}

export const Badge = ({ label, variant = 'info'}: BadgeProps) => {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide";

  const varientStyles = {
    info: "bg-blue-100 text-blue-800",
    critical: "bg-red-100 text-red-800 animate-pulse",
    success: "bg-green-100 text-green-800",
  }

  return (
    <span className={`${baseStyles} ${varientStyles[variant]}`}>
      {label}
    </span>
  )
}