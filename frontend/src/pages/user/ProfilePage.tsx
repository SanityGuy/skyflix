import { 
    FaGithub,

} from "react-icons/fa6";

import {
    ExternalLink
} from "lucide-react";

function ProfilePage() {
    return (
        <div className="flex flex-col items-center justify-center py-50 text-center text-zinc-400">
            <p className="text-xl font-bold text-zinc-300">Profile Page</p>
            <p className="mt-1 text-sm text-zinc-400 text-center">
                As you can see the page is currently empty and you may ask why? Well, the answer is simple, <br />
                I haven't implemented it yet. But don't worry, I will implement it soon. In the meantime, <br />
                you can explore other pages of the application. and also because the developer is lazy, <br />
                I will implement it for you in the next release.
            </p>
            <p className="mt-1 text-sm text-zinc-400">
                <a
                    href="https://github.com/SanityGuy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-zinc-200 hover:text-[#0095B6] hover:scale-[1.02] active:scale-[0.98] transition-colors inline-flex items-center space-x-1"
                >
                    <FaGithub size={15} className="ml-1 inline-flex items-center" />
                    <span>SanityGuy</span>
                    <ExternalLink size={12} className="ml-0.1 inline-flex items-center" />
                </a>
            </p>
        </div>
    )
}

export default ProfilePage;