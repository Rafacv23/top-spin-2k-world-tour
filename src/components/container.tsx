type ContainerProps = {
  children: React.ReactNode
}
export default function Container({ children }: ContainerProps) {
  return (
    <div className="grid grid-cols-1 pt-10 sm:pt-20 md:pt-40 mb-20">
      <main className="px-8 space-y-8 w-full">{children}</main>
    </div>
  )
}
