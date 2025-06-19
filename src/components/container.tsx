type ContainerProps = {
  children: React.ReactNode
}
export default function Container({ children }: ContainerProps) {
  return (
    <div className="grid grid-cols-1 pt-40 mb-20">
      <main className="px-8 space-y-8">{children}</main>
    </div>
  )
}
