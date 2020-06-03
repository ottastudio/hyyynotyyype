export type DotProps = {
  dot?: string;
};

export default ({ dot }: DotProps) => {
  return (
    <>
      {Array(3)
        .fill(1)
        .map((_item: any, i: number) => (
          <span key={i} className={`dot dot-${i}`}>
            {dot ? dot : "."}
          </span>
        ))}
      <style jsx>{`
        .dot {
          display: inline-block;
          animation-timing-function: cubic-bezier(0, 1, 1, 0);
        }
        .dot-0 {
          animation: dot-0 1000ms infinite;
        }
        .dot-1 {
          animation: dot-1 1000ms infinite 200ms;
        }
        .dot-2 {
          animation: dot-2 1000ms infinite 400ms;
        }
        @keyframes dot-0 {
          0% {
            transform: translateY(0%);
          }
          50% {
            transform: translateY(-25%);
          }
          100% {
            transform: translateY(0%);
          }
        }
        @keyframes dot-1 {
          0% {
            transform: translateY(0%);
          }
          50% {
            transform: translateY(-25%);
          }
          100% {
            transform: translateY(0%);
          }
        }
        @keyframes dot-2 {
          0% {
            transform: translateY(0%);
          }
          50% {
            transform: translateY(-25%);
          }
          100% {
            transform: translateY(0%);
          }
        }
      `}</style>
    </>
  );
};
