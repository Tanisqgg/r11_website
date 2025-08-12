import type {Metadata} from "next";
import "./globals.css";
import {Inter} from "next/font/google";
import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/next";


const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "RedElevenLabs — Deepfake Detection & Automated Takedowns",
    description:
        "RedElevenLabs finds deepfakes and unauthorized content online, then automates evidence collection and takedowns before harm spreads.",
    openGraph: {
        title: "RedElevenLabs — Deepfake Detection & Automated Takedowns",
        description:
            "Proactive detection + automated enforcement for platforms, creators, and brands.",
        url: "https://redelevenlabs.com",
        siteName: "RedElevenLabs",
        images: [{url: "/og-image.png", width: 1200, height: 630}],
        locale: "en_US",
        type: "website"
    },
    icons: [{rel: "icon", url: "/logo.png"}]
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {children}
            <Analytics/>
            <SpeedInsights/>
        </body>
        </html>
    );
}
