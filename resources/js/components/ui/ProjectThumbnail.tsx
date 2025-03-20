import React from 'react';

interface ProjectThumbnailProps {
    title: string;
    className?: string;
}

const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({ title, className = "w-full h-full" }) => {
    return (
        <svg
            className={className}
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="400" height="300" fill="#1E293B" />
            <rect x="40" y="40" width="320" height="40" rx="4" fill="#334155" />
            <rect x="40" y="100" width="200" height="160" rx="4" fill="#334155" />
            <rect x="260" y="100" width="100" height="160" rx="4" fill="#334155" />
            <circle cx="60" cy="60" r="10" fill="#60A5FA" />
            <text
                x="200"
                y="150"
                fontFamily="system-ui"
                fontSize="24"
                fill="#94A3B8"
                textAnchor="middle"
            >
                {title}
            </text>
            <path
                d="M180 200 L220 200"
                stroke="#94A3B8"
                strokeWidth="4"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default ProjectThumbnail;
