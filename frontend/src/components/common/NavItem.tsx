import { NavLink } from "react-router-dom";
import { type LucideIcon } from "lucide-react";

interface NavItemProps {
  to: string;
  icon: LucideIcon;
  label: string;
  badge?: string | number;
}

export default function NavItem({ to, icon: Icon, label, badge }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group relative flex items-center gap-4 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium transition-all duration-200 ${
          isActive
            ? "bg-[#0095B6]/15 text-[#0095B6] font-bold shadow-[inset_0_0_12px_rgba(0,149,182,0.1)]"
            : "text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-100"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <Icon className={`h-5 w-5 shrink-0 transition-colors ${isActive ? "text-[#0095B6]" : "text-zinc-400 group-hover:text-zinc-200"}`} />
          <span className="truncate">{label}</span>
          {badge !== undefined && (
            <span className="ml-auto rounded-full bg-[#0095B6] px-2 py-0.5 text-[10px] font-bold text-white">
              {badge}
            </span>
          )}
          {isActive && (
            <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-[#0095B6] shadow-[0_0_8px_#0095B6]" />
          )}
        </>
      )}
    </NavLink>
  );
}