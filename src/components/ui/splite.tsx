'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
    scene: string
    className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    return (
        <Suspense
            fallback={
                <div
                    className="w-full h-full"
                    style={{
                        background:
                            'radial-gradient(ellipse 60% 50% at 55% 45%, rgba(25,245,156,0.12) 0%, rgba(25,245,156,0.03) 40%, transparent 70%)',
                    }}
                />
            }
        >
            <Spline
                scene={scene}
                className={className}
            />
        </Suspense>
    )
}
