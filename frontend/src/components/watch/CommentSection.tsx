import { useState } from "react";

interface Comment {
    id: string;
    text: string;
    createdAt: string;
}

export default function CommentSection() {
    const [comments, setComments] = useState<Comment[]>([]);
    const [commentText, setCommentText] = useState("");
    const [isCommenting, setIsCommenting] = useState(false);

    const handleAddComment = () => {
        if (!commentText.trim()) return;
        const newComment: Comment = {
        id: Date.now().toString(),
        text: commentText.trim(),
        createdAt: "Just now",
        };
        setComments([newComment, ...comments]);
        setCommentText("");
        setIsCommenting(false);
    };

    return (
        <div className="pt-4 space-y-4">
        <div className="flex items-center space-x-6">
            <h2 className="text-lg font-bold text-white">
            {comments.length} Comments
            </h2>
        </div>

        <div className="flex gap-4 items-start pt-2">
            <div className="h-10 w-10 shrink-0 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-sm font-bold text-[#0095B6]">
            S
            </div>
            <div className="flex-1 space-y-2">
            <input
                type="text"
                value={commentText}
                onFocus={() => setIsCommenting(true)}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Add a comment..."
                className="w-full border-b border-zinc-700 bg-transparent py-1 text-sm text-white placeholder-zinc-400 focus:border-[#0095B6] focus:outline-none transition-colors"
            />

            {isCommenting && (
                <div className="flex justify-end space-x-2 pt-1">
                <button
                    type="button"
                    onClick={() => {
                    setIsCommenting(false);
                    setCommentText("");
                    }}
                    className="rounded-full px-4 py-1.5 text-xs font-semibold text-zinc-300 hover:bg-zinc-800 transition-colors"
                >
                    Cancel
                </button>
                <button
                    type="button"
                    disabled={!commentText.trim()}
                    onClick={handleAddComment}
                    className="rounded-full bg-[#0095B6] px-4 py-1.5 text-xs font-semibold text-white disabled:opacity-40 disabled:bg-zinc-800 disabled:text-zinc-500 hover:bg-[#00819e] transition-colors"
                >
                    Comment
                </button>
                </div>
            )}
            </div>
        </div>

        <div className="space-y-3 pt-2">
            {comments.map((comment) => (
            <div key={comment.id} className="flex gap-3 text-xs">
                <div className="h-8 w-8 shrink-0 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-[#0095B6]">
                S
                </div>
                <div>
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">You</span>
                    <span className="text-zinc-500 text-[10px]">{comment.createdAt}</span>
                </div>
                <p className="mt-1 text-zinc-200">{comment.text}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}