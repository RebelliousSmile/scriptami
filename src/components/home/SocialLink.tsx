import { type Social } from '@/types/content'

export function SocialLink({ social, className = '' }: { social: Social, className?: string }) {
  return (
    <a
      href={social.href}
      className={`group -m-1 p-1 ${className}`}
      aria-label={social.label}
    >
      <social.icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </a>
  )
} 