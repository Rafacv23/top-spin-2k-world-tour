import React from "react"

export default function GlowingTitle({
  children,
  size,
}: {
  children: React.ReactNode
  size?: "h3" | "h2" | "h1"
}) {
  return (
    <div className="flex items-center justify-center bg-background">
      <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-white to-primary bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
        {children}
      </span>
      {React.createElement(
        size || "h1",
        {
          className:
            "relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-white to-primary bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto",
        },
        children
      )}
    </div>
  )
}
