import { Skeleton } from "@/components/ui/skeleton"

export default function RankingsTableSkeleton() {
  return (
    <div>
      <header className="flex items-center justify-between">
        <Skeleton className="h-[20px] w-[100px] rounded-lg" />
        <Skeleton className="h-[20px] w-[100px] rounded-lg" />
        <Skeleton className="h-[20px] w-[100px] rounded-lg" />
        <Skeleton className="h-[20px] w-[100px] rounded-lg" />
        <Skeleton className="h-[20px] w-[100px] rounded-lg" />
      </header>
      <main className="grid grid-cols-1 gap-4 mt-4">
        <Skeleton className="h-[20px] w-full rounded-lg" />
        <Skeleton className="h-[20px] w-full rounded-lg" />
        <Skeleton className="h-[20px] w-full rounded-lg" />
        <Skeleton className="h-[20px] w-full rounded-lg" />
        <Skeleton className="h-[20px] w-full rounded-lg" />
        <Skeleton className="h-[20px] w-full rounded-lg" />
        <Skeleton className="h-[20px] w-full rounded-lg" />
        <Skeleton className="h-[20px] w-full rounded-lg" />
        <Skeleton className="h-[20px] w-full rounded-lg" />
        <Skeleton className="h-[20px] w-full rounded-lg" />
      </main>
    </div>
  )
}
