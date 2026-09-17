interface SkeletonCardProps {
  type?: "video" | "channel" | "horizontal";
}

export default function SkeletonCard({ type = "video" }: SkeletonCardProps) {
  if (type === "channel") {
    return (
      <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 animate-pulse">
        <div className="h-16 w-16 rounded-full bg-zinc-800 shrink-0" />
        <div className="space-y-2 flex-1 min-w-0">
          <div className="h-4 w-1/3 rounded bg-zinc-800" />
          <div className="h-3 w-1/4 rounded bg-zinc-800/70" />
          <div className="h-3 w-1/2 rounded bg-zinc-800/50" />
        </div>
        <div className="h-9 w-24 rounded-full bg-zinc-800 shrink-0 hidden sm:block" />
      </div>
    );
  }

  if (type === "horizontal") {
    return (
      <div className="flex flex-col sm:flex-row gap-4 w-full animate-pulse">
        <div className="aspect-video w-full sm:w-64 lg:w-80 rounded-xl bg-zinc-800 shrink-0" />
        <div className="flex-1 space-y-2.5 py-1">
          <div className="h-4 w-3/4 rounded bg-zinc-800" />
          <div className="h-3 w-1/3 rounded bg-zinc-800/70" />
          <div className="flex items-center gap-2 pt-2">
            <div className="h-6 w-6 rounded-full bg-zinc-800" />
            <div className="h-3 w-24 rounded bg-zinc-800/60" />
          </div>
          <div className="h-3 w-full rounded bg-zinc-800/40 pt-1 hidden sm:block" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 w-full animate-pulse">
      <div className="aspect-video w-full rounded-xl bg-zinc-800" />
      <div className="flex gap-3">
        <div className="h-9 w-9 rounded-full bg-zinc-800 shrink-0" />
        <div className="space-y-2 flex-1 min-w-0">
          <div className="h-3.5 w-full rounded bg-zinc-800" />
          <div className="h-3.5 w-2/3 rounded bg-zinc-800" />
          <div className="h-3 w-1/2 rounded bg-zinc-800/60 pt-1" />
        </div>
      </div>
    </div>
  );
}