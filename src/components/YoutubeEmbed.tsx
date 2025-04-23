import { useState } from "react";

export default function YouTubeEmbed() {
    const [play, setPlay] = useState(false);
    const videoId = "Upgz7eLO7CY";

    return (
        <div className="relative w-full cursor-pointer" onClick={() => setPlay(true)}>
            {!play ? (
                <div className="relative">
                <img src="YoutubeEmbed.jpg" alt="Video preview" className="w-full rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 rounded-full p-4">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                    </div>
                </div>
                </div>
            ) : (
                <iframe
                    className="w-full aspect-video rounded-lg"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title="YouTube video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            )}
        </div>
    );
}
