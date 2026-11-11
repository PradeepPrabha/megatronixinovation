import { BarChart3, BookOpen, Briefcase, Bug, Circle, ClipboardList, Code2, Coffee, FolderGit2, Globe, Layers, LayoutTemplate, LifeBuoy, Megaphone, MessagesSquare, Monitor, Palette, PenTool, Puzzle, Rocket, Search, ShieldCheck, ShoppingCart, Smartphone, Terminal, Users, Utensils } from 'lucide-react'
import type { LucideIcon, LucideProps } from 'lucide-react'

const map: Record<string, LucideIcon> = { BarChart3, BookOpen, Briefcase, Bug, Circle, ClipboardList, Code2, Coffee, FolderGit2, Globe, Layers, LayoutTemplate, LifeBuoy, Megaphone, MessagesSquare, Monitor, Palette, PenTool, Puzzle, Rocket, Search, ShieldCheck, ShoppingCart, Smartphone, Terminal, Users, Utensils }

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = map[name] ?? Circle
  return <Cmp aria-hidden="true" {...props} />
}
