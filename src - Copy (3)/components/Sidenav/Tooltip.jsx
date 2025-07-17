
export default function Tooltip({ message, children }) {
    return (
    <>
        <style>
        {`
            .clip-left {
            clip-path: polygon(100% 50%, 0 0, 0 100%);
            }
        `}
        </style>
      <div className="group relative flex max-w-max flex-col items-center justify-center">
        {children}
        <div className="absolute top-1/2 right-full -translate-y-1/2 translate-x-5 opacity-0 scale-95
                        rounded-lg px-3 py-2 text-xs font-medium transition-all duration-500
                        group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-100">
          <div className="flex flex-col items-center shadow-lg">
            <div className="clip-left h-3 w-2 bg-[#515151] absolute top-1/2 -translate-y-1/2 right-[4px]"></div>
            <div className="rounded bg-[#515151] p-2 text-center text-xs text-white min-w-[100px] h-[30px] flex items-center justify-center text-[12px]">
              {message}
            </div>
          </div>
        </div>
      </div>
    </>
    );
  }