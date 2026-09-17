import { NavLink, Link } from "react-router-dom";
import { 
    FileText, 
    ShieldCheck, 
    Scale, 
    AlertCircle,
    ArrowLeft,
    Home,
    PanelLeft,
    PanelRight,
} from "lucide-react";

import logo from "../../assets/logo/skyflix/skyflix_name_dark.png"; 

interface TSidebarProps {
    isCollapsed?: boolean;
    onToggleSidebar?: () => void;
}

const navItems = [
    { path: "/t/terms", label: "Terms of Service", icon: FileText },
    { path: "/t/privacy", label: "Privacy Policy", icon: ShieldCheck },
    { path: "/t/guidelines", label: "Community Guidelines", icon: Scale },
    { path: "/t/copyright", label: "DMCA & Copyright", icon: AlertCircle },
];

export default function TSidebar({
    isCollapsed = false,
    onToggleSidebar, 
}: TSidebarProps) {
    return (
        <aside
        className={`sticky top-0 h-screen flex-shrink-0 overflow-y-auto border-r border-zinc-800 bg-[#0f0f0f] px-3 py-4 text-white scrollbar-thin scrollbar-thumb-zinc-800 transition-all duration-300 ease-in-out ${
            isCollapsed ? "w-16" : "w-64"
        }`}
        >
        <div className="flex items-center justify-between gap mb-4 px-1">
            <Link to="/" className="flex items-center gap-2.5 overflow-hidden">
            <img 
                src={logo} 
                alt="SkyFlix Logo" 
                className="h-10 w-auto max-w-[120px] object-contain shrink-0 ml-2 z-10"
            />
            <h1 className="absolute top-4 right-15 text-xs font-bold text-[#0095B6] bg-zinc-800/90 px-1.5 py-0.5 rounded-lg">
                LEGAL
            </h1>
            </Link>

            <button
            onClick={onToggleSidebar}
            className="rounded-lg p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors shrink-0"
            aria-label="Toggle Sidebar"
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
            {isCollapsed ? <PanelLeft size={20} /> : <PanelRight size={20} />}
            </button>
        </div>

        <Link
            to="/"
            title={isCollapsed ? "Back to SkyFlix" : undefined}
            className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-semibold text-zinc-400 hover:text-[#0095B6] hover:bg-zinc-800/60 transition-colors mb-2 ${
            isCollapsed ? "justify-center px-0" : ""
            }`}
        >
            {isCollapsed ? <Home size={20} className="shrink-0" /> : <ArrowLeft size={20} className="shrink-0" />}
            {!isCollapsed && <span>Back to SkyFlix</span>}
        </Link>

        <hr className="my-3 border-zinc-800/80" />

        {!isCollapsed && (
            <h3 className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-zinc-500">
            Legal Documents
            </h3>
        )}

        <nav className="space-y-1">
            {navItems.map((item) => (
            <NavLink
                key={item.path}
                to={item.path}
                title={isCollapsed ? item.label : undefined}
                className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-medium transition-colors ${
                    isCollapsed ? "justify-center px-0" : ""
                } ${
                    isActive
                    ? "bg-[#0095B6]/15 text-[#0095B6] font-semibold border border-[#0095B6]/30"
                    : "text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-200"
                }`
                }
            >
                <item.icon className="h-4 w-4 shrink-0" />
                {!isCollapsed && <span>{item.label}</span>}
            </NavLink>
            ))}
        </nav>
        </aside>
    );
}