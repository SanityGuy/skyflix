import categories from "../../constants/categories";

interface CategoryBarProps {
    selected: string;
    onSelect: (category: string) => void;
}

export default function CategoryBar({
    selected,
    onSelect,
}: CategoryBarProps) {
    return (
        <div className="flex gap-2 overflow-x-auto px-4 py-2.5 no-scrollbar scroll-smooth">
            {categories.map((category) => {
                const isActive = selected.toLowerCase() === category.toLowerCase();
                return (
                    <button
                        key={category}
                        onClick={() => onSelect(category)}
                        className={`whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${
                            isActive
                                ? "bg-[#0095B6] text-white shadow-md shadow-[#0095B6]/20"
                                : "bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                        }`}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                );
            })}
        </div>
    );
}