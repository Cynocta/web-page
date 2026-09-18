import type { CSSProperties } from "react";
import type { HomeContent } from "@/lib/content/home";
import type { ServiceIcon } from "@/lib/content/services/types";
import v from "./service-visuals.module.css";

type Labels = HomeContent["services"]["visuals"];

/* Bar heights for the data illustration, in percent. Illustrative shapes, not
   figures: the chart carries no numbers on purpose. */
const ENQUIRIES = [52, 64, 58, 74, 68, 42, 30];
const BOOKINGS = [24, 32, 27, 40, 36, 19, 12];

const bar = (height: number, index: number) =>
    ({ "--h": `${height}%`, animationDelay: `${index * 60}ms` }) as CSSProperties;

/** Several channels converge on one agent and leave sorted. */
function ConversationVisual({ labels }: { labels: Labels }) {
    return (
        <div className={v.convo}>
            <svg className={v.lines} viewBox="0 0 300 150" preserveAspectRatio="none" aria-hidden="true">
                {[25, 75, 125].map((y) => (
                    <path key={`in-${y}`} className={v.line} d={`M88 ${y} C 104 ${y}, 104 75, 116 75`} />
                ))}
                {[25, 75, 125].map((y) => (
                    <path key={`out-${y}`} className={v.line} d={`M184 75 C 196 75, 196 ${y}, 212 ${y}`} />
                ))}
            </svg>
            <ul className={v.channels}>
                {labels.channels.map((channel) => (
                    <li key={channel} className={v.pill}>
                        {channel}
                    </li>
                ))}
            </ul>
            <div className={v.agent}>
                <span className={v.agentRing} />
                {labels.agent}
            </div>
            <ul className={v.outcomes}>
                {labels.outcomes.map((outcome, index) => (
                    <li
                        key={outcome}
                        className={`${v.pill} ${v.outcome}`}
                        style={{ animationDelay: `${index * 1.1}s` }}
                    >
                        {outcome}
                    </li>
                ))}
            </ul>
        </div>
    );
}

/** A record travelling through a pipeline, each stage lighting as it passes. */
function FlowVisual({ labels }: { labels: Labels }) {
    return (
        <div className={v.flow}>
            <div className={v.pipeline}>
                <div className={v.track}>
                    <span className={v.packet} />
                </div>
                {labels.flow.map((node, index) => (
                    <div
                        key={node}
                        className={v.node}
                        style={{ animationDelay: `${(index / labels.flow.length) * 3.6}s` }}
                    >
                        <span className={v.nodeIndex}>{index + 1}</span>
                        {node}
                    </div>
                ))}
            </div>
            <p className={v.caption}>{labels.flowCaption}</p>
        </div>
    );
}

/** A site with a real call to action, and the enquiry it produces. */
function BrowserVisual({ labels }: { labels: Labels }) {
    return (
        <div className={v.browser}>
            <div className={v.browserBar}>
                <span className={v.browserDot} />
                <span className={v.browserDot} />
                <span className={v.browserDot} />
                <span className={v.url}>{labels.browserUrl}</span>
            </div>
            <div className={v.page}>
                <span className={v.skeletonTitle} />
                <span className={v.skeletonLine} />
                <span className={`${v.skeletonLine} ${v.skeletonShort}`} />
                <span className={v.cta}>{labels.browserCta}</span>
            </div>
            <div className={v.toast}>
                <span className={v.toastDot} />
                {labels.browserToast}
            </div>
        </div>
    );
}

/** Two series over a week, drawn from nothing when the panel opens. */
function ChartVisual({ labels }: { labels: Labels }) {
    return (
        <div className={v.chart}>
            <div className={v.chartHead}>
                <span>{labels.chartTitle}</span>
                <span className={v.legend}>
                    <span className={v.legendA} />
                    {labels.chartLegend[0]}
                    <span className={v.legendB} />
                    {labels.chartLegend[1]}
                </span>
            </div>
            <div className={v.bars}>
                {labels.chartDays.map((day, index) => (
                    <div key={index} className={v.barGroup}>
                        <div className={v.barPair}>
                            <span className={v.barA} style={bar(ENQUIRIES[index], index)} />
                            <span className={v.barB} style={bar(BOOKINGS[index], index)} />
                        </div>
                        <span className={v.day}>{day}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

/**
 * One illustration per service family, keyed by the family's icon.
 *
 * Plain markup and CSS — no images, no canvas, no library — so they render with
 * the page, cost nothing to download and stop moving under reduced motion.
 * Decorative: the family's services are listed as text right beside them.
 */
export default function ServiceVisual({ kind, labels }: { kind: ServiceIcon; labels: Labels }) {
    if (kind === "chat") return <ConversationVisual labels={labels} />;
    if (kind === "flow") return <FlowVisual labels={labels} />;
    if (kind === "web") return <BrowserVisual labels={labels} />;
    return <ChartVisual labels={labels} />;
}
