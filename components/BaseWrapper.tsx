import "@/app/globals.css";

export default function BaseWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full relative justify-start items-center px-6 flex-col min-h-screen">
      <div className="w-full max-w-[1440px] overflow-scroll flex justify-start items-center flex-col no-scrollbars h-[100%] pb-16">
        {children}
      </div>
    </div>
  );
}
