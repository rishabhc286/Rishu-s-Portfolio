import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Github, ExternalLink, Lock } from "lucide-react";
import "./ChromaGrid.css";

export interface ChromaItem {
    id: number;
    image?: string;
    title: string;
    subtitle: string;
    description: string;
    tags?: string[];
    borderColor: string;
    gradient: string;
    githubUrl?: string;
    liveUrl?: string;
    status?: "shipped" | "wip" | "locked";
}

interface ChromaGridProps {
    items: ChromaItem[];
    className?: string;
    radius?: number;
    damping?: number;
    fadeOut?: number;
    ease?: string;
}

export const ChromaGrid = ({
    items,
    className = "",
    radius = 300,
    damping = 0.45,
    fadeOut = 0.6,
    ease = "power3.out",
}: ChromaGridProps) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const fadeRef = useRef<HTMLDivElement>(null);
    const setX = useRef<((v: number) => void) | null>(null);
    const setY = useRef<((v: number) => void) | null>(null);
    const pos = useRef({ x: 0, y: 0 });

    const data = items?.length ? items : [];

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        setX.current = gsap.quickSetter(el, "--x", "px") as (v: number) => void;
        setY.current = gsap.quickSetter(el, "--y", "px") as (v: number) => void;
        const { width, height } = el.getBoundingClientRect();
        pos.current = { x: width / 2, y: height / 2 };
        setX.current(pos.current.x);
        setY.current(pos.current.y);
    }, []);

    const moveTo = (x: number, y: number) => {
        gsap.to(pos.current, {
            x,
            y,
            duration: damping,
            ease,
            onUpdate: () => {
                setX.current?.(pos.current.x);
                setY.current?.(pos.current.y);
            },
            overwrite: true,
        });
    };

    const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
        const r = rootRef.current!.getBoundingClientRect();
        moveTo(e.clientX - r.left, e.clientY - r.top);
        gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    };

    const handleLeave = () => {
        gsap.to(fadeRef.current, {
            opacity: 1,
            duration: fadeOut,
            overwrite: true,
        });
    };

    const handleCardMove = (e: React.MouseEvent<HTMLElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    };

    const StatusBadge = ({ status }: { status?: string }) => {
        if (status === "shipped")
            return <span className="chroma-shipped-badge">✓ Shipped</span>;
        if (status === "wip")
            return <span className="chroma-wip-badge">⚡ In Progress</span>;
        return null;
    };

    return (
        <div
            ref={rootRef}
            className={`chroma-grid ${className}`}
            style={{ "--r": `${radius}px` } as React.CSSProperties}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
        >
            {data.map((c, i) => {
                /* ── Locked / "Revealing Soon" card ── */
                if (c.status === "locked") {
                    return (
                        <article
                            key={i}
                            className="chroma-card chroma-card--locked"
                            style={
                                {
                                    "--card-border": c.borderColor,
                                    "--card-gradient": c.gradient,
                                } as React.CSSProperties
                            }
                            onMouseMove={handleCardMove}
                        >
                            <div className="chroma-lock-inner">
                                <div className="lock-icon-wrap">
                                    <Lock size={22} color="rgba(255,255,255,0.25)" />
                                </div>
                                <div>
                                    <p className="lock-title">???</p>
                                    <p className="lock-sub">Next Project</p>
                                </div>
                                <p className="lock-pill">Revealing Soon</p>
                                <p
                                    style={{
                                        fontFamily: "'Space Mono', monospace",
                                        fontSize: "0.65rem",
                                        color: "rgba(255,255,255,0.18)",
                                        marginTop: "0.25rem",
                                    }}
                                >
                  // stay tuned 👀
                                </p>
                            </div>
                        </article>
                    );
                }

                /* ── Normal project card ── */
                return (
                    <article
                        key={i}
                        className="chroma-card"
                        onMouseMove={handleCardMove}
                        style={
                            {
                                "--card-border": c.borderColor,
                                "--card-gradient": c.gradient,
                            } as React.CSSProperties
                        }
                    >
                        {/* Image */}
                        {c.image && (
                            <div className="chroma-img-wrapper">
                                <img src={c.image} alt={c.title} loading="lazy" />
                            </div>
                        )}

                        {/* Body */}
                        <div className="chroma-body">
                            <div className="chroma-badge-row">
                                <StatusBadge status={c.status} />
                            </div>
                            <h3 className="chroma-info name" style={{ padding: 0 }}>
                                {c.title}
                            </h3>
                            <p className="chroma-info role" style={{ padding: 0 }}>
                                {c.description}
                            </p>
                            {c.tags && c.tags.length > 0 && (
                                <div className="chroma-tags">
                                    {c.tags.map((tag) => (
                                        <span key={tag} className="chroma-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Links */}
                        {(c.githubUrl || c.liveUrl) && (
                            <div className="chroma-links">
                                {c.githubUrl && (
                                    <a
                                        href={c.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="chroma-link-btn ghost"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <Github size={12} />
                                        Source
                                    </a>
                                )}
                                {c.liveUrl && (
                                    <a
                                        href={c.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="chroma-link-btn solid"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <ExternalLink size={12} />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        )}
                    </article>
                );
            })}

            {/* Radial grayscale overlay */}
            <div className="chroma-overlay" />
            {/* Fade layer — shown when cursor leaves */}
            <div ref={fadeRef} className="chroma-fade" />
        </div>
    );
};

export default ChromaGrid;
