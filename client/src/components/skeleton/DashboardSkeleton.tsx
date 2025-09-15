function DashboardSkeleton() {
  return (
    <section className="mt-[150px] flex flex-col gap-5 pb-5">
      <div className="w-full h-[400px] grid grid-cols-1 md:grid-cols-5 gap-5">
        <Skeleton className="h-full col-span-2" />
        <Skeleton className="h-full col-span-1" />
        <Skeleton className="h-full col-span-2" />
      </div>
      <Skeleton className="w-full h-[400px]" />
      <div className="w-full h-[400px] grid grid-cols-1 md:grid-cols-5 gap-5">
        <Skeleton className="h-full col-span-1" />
        <Skeleton className="h-full col-span-1" />
        <Skeleton className="h-full col-span-1" />
        <Skeleton className="h-full col-span-1" />
        <Skeleton className="h-full col-span-1" />
      </div>
      <Skeleton className="w-full h-[400px]" />
    </section>
  );
}

const Skeleton = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`w-full bg-gray-200 animate-pulse rounded-xl ${className}`}
    ></div>
  );
};

export default DashboardSkeleton;
