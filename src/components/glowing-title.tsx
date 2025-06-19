export default function GlowingTitle({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center justify-center bg-background">
      <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-white to-primary bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none">
        {children}
      </span>
      <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-white to-primary  bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
        {children}
      </h1>
    </div>
  )
}
