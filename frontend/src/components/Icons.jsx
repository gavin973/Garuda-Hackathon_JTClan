const iconProps = {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.75,
    stroke: "currentColor",
    "aria-hidden": true,
};

export function IconLeaf({ className = "w-5 h-5" }) {
    return (
        <svg className={className} {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.5 4.5-6 9-6 12a6 6 0 0012 0c0-3-1.5-7.5-6-12z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
        </svg>
    );
}

export function IconArrowRight({ className = "w-4 h-4" }) {
    return (
        <svg className={className} {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
    );
}

export function IconTarget({ className = "w-6 h-6" }) {
    return (
        <svg className={className} {...iconProps}>
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        </svg>
    );
}

export function IconCpu({ className = "w-6 h-6" }) {
    return (
        <svg className={className} {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 7h10v10H7V7z" />
        </svg>
    );
}

export function IconChart({ className = "w-6 h-6" }) {
    return (
        <svg className={className} {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 20h18M7 16V8m5 8V4m5 12v-6" />
        </svg>
    );
}

export function IconGlobe({ className = "w-6 h-6" }) {
    return (
        <svg className={className} {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3c-2.5 2.7-3.8 6-3.8 9s1.3 6.3 3.8 9c2.5-2.7 3.8-6 3.8-9s-1.3-6.3-3.8-9z" />
        </svg>
    );
}

export function IconDatabase({ className = "w-6 h-6" }) {
    return (
        <svg className={className} {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3M4 17c0 1.7 3.6 3 8 3s8-1.3 8-3" />
        </svg>
    );
}

export function IconBrain({ className = "w-6 h-6" }) {
    return (
        <svg className={className} {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 4A3.5 3.5 0 006 7.5c0 .9.3 1.7.9 2.3A4 4 0 006 14a4 4 0 003.5 4 3.5 3.5 0 007 0A4 4 0 0020 14a4 4 0 00-1.9-4.2A3.5 3.5 0 0015.5 4 3.5 3.5 0 0012 5.5 3.5 3.5 0 009.5 4z" />
        </svg>
    );
}

export function IconSprout({ className = "w-6 h-6" }) {
    return (
        <svg className={className} {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 22V12M12 12C12 7 7 4 4 4c0 4 2 8 8 8M12 12c0-5 5-8 8-8 0 4-2 8-8 8" />
        </svg>
    );
}

export function IconFlask({ className = "w-5 h-5" }) {
    return (
        <svg className={className} {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6M10 3v5.3L5.5 18.5A2 2 0 007.2 21h9.6a2 2 0 001.7-2.5L14 8.3V3" />
        </svg>
    );
}

export function IconThermometer({ className = "w-5 h-5" }) {
    return (
        <svg className={className} {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 14.8V5a2 2 0 10-4 0v9.8a4 4 0 104 0z" />
        </svg>
    );
}

export function IconDroplet({ className = "w-5 h-5" }) {
    return (
        <svg className={className} {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c3 4.5 6 8 6 11a6 6 0 11-12 0c0-3 3-6.5 6-11z" />
        </svg>
    );
}

export function IconCloudRain({ className = "w-5 h-5" }) {
    return (
        <svg className={className} {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.9-7.9A5 5 0 0117.9 9 4 4 0 017 16zM8 20v-2m4 2v-2m4 2v-2" />
        </svg>
    );
}

export function IconCalendar({ className = "w-5 h-5" }) {
    return (
        <svg className={className} {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 4V2m8 2V2M4 8h16M6 6h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z" />
        </svg>
    );
}

export function IconTrophy({ className = "w-5 h-5" }) {
    return (
        <svg className={className} {...iconProps}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4zM5 4H3v2a4 4 0 004 4M19 4h2v2a4 4 0 01-4 4" />
        </svg>
    );
}

export function IconCheck({ className = "w-4 h-4" }) {
    return (
        <svg className={className} {...iconProps} strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    );
}

export function IconSun({ className = "w-5 h-5" }) {
    return (
        <svg className={className} {...iconProps}>
            <circle cx="12" cy="12" r="4" />
            <path strokeLinecap="round" d="M12 2v2m0 16v2M4.2 4.2l1.4 1.4m12.8 12.8l1.4 1.4M2 12h2m16 0h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
    );
}

export function StatusDot({ level, className = "" }) {
    const colors = {
        good: "bg-emerald-500",
        medium: "bg-amber-500",
        poor: "bg-red-500",
        excellent: "bg-emerald-500",
        fair: "bg-amber-500",
    };
    return (
        <span
            className={`inline-block w-2 h-2 rounded-full shrink-0 ${colors[level] ?? "bg-slate-400"} ${className}`}
            aria-hidden="true"
        />
    );
}
