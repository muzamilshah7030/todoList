
import React, { useRef } from 'react';
const FRAMEA = () => {
  const headingRef = useRef(null);
  const makeHeadingEditable = () => {
    if (headingRef.current) {
      headingRef.current.contentEditable = true;
      headingRef.current.focus();
    }
  };
  return (
    <section className="w-[60.669rem] flex flex-row items-end justify-start py-[0rem] pr-[1.25rem] pl-[0rem] box-border gap-[4.781rem] max-w-full text-left text-[1.125rem] text-black font-inter mq725:gap-[1.188rem] mq975:flex-wrap mq975:gap-[2.375rem]">
      <div className="h-[11.563rem] w-[21.25rem] rounded-8xs [background:linear-gradient(248.23deg,_#37403d,_rgba(255,_255,_255,_0.43))] flex flex-col items-start justify-start pt-[0.831rem] pb-[1.5rem] pr-[0.775rem] pl-[2.112rem] box-border gap-[0.843rem] min-w-[21.25rem] max-w-full mq450:min-w-full mq975:flex-1">
        <div className="w-[21.25rem] h-[11.563rem] relative rounded-8xs [background:linear-gradient(248.23deg,_#37403d,_rgba(255,_255,_255,_0.43))] hidden max-w-full" />
        <div className="self-stretch flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch flex-1 flex flex-row items-start justify-between shrink-0 [debug_commit:1de1738] gap-[1.25rem]">
            <div className="w-[4.731rem] flex flex-row items-start justify-start py-[0rem] pr-[0.062rem] pl-[0rem] box-border shrink-0 [debug_commit:1de1738]">
              <div className="flex-1 flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[0.937rem]">
                  <div className="h-[1.65rem] relative tracking-[-0.05em] leading-[120%] inline-block min-w-[0.944rem] shrink-0 [debug_commit:1de1738] z-[1]">
                    0
                  </div>
                </div>
                <div className="self-stretch h-[2.594rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border text-[3.125rem] font-roboto">
                  <div className="mt-[-0.532rem] flex-1 relative tracking-[0.03em] leading-[3.125rem] shrink-0 [debug_commit:1de1738] z-[1] mq450:text-[1.875rem] mq450:leading-[1.875rem] mq975:text-[2.5rem] mq975:leading-[2.5rem]">
                    26
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[0.781rem] px-[0rem] pb-[0rem] ml-[-0.95rem] text-[1.438rem]">
                <div className="relative tracking-[-0.05em] leading-[1.513rem] inline-block min-w-[0.881rem] z-[1] mq450:text-[1.125rem] mq450:leading-[1.188rem]">
                  C
                </div>
              </div>
            </div>
            <div className="h-[4.881rem] w-[7.956rem] relative shrink-0 [debug_commit:1de1738] z-[1] flex items-center justify-center">
              <img
                className="h-full w-full shrink-0 [debug_commit:1de1738] z-[1] object-contain absolute left-[0.813rem] top-[-0.062rem] [transform:scale(1.43)]"
                loading="lazy"
                alt=""
                src="/weathericon--252.svg"
              />
            </div>
          </div>
          <div className="w-[11.85rem] relative text-[1.563rem] leading-[120%] font-roboto inline-block shrink-0 [debug_commit:1de1738] z-[1] mt-[-0.15rem] mq450:text-[1.25rem] mq450:leading-[1.5rem]">
            1st May 23
          </div>
        </div>
        <div className="w-[15.369rem] flex flex-row items-start justify-start py-[0rem] pr-[0.187rem] pl-[0.168rem] box-border text-[1.563rem] font-roboto">
          <div className="flex-1 flex flex-row items-start justify-start gap-[1.062rem]">
            <div className="flex flex-col items-start justify-start pt-[0.175rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[1.219rem] h-[1.369rem] relative z-[1]"
                loading="lazy"
                alt=""
                src="/group-703.svg"
              />
            </div>
            <div className="flex-1 relative tracking-[0.01em] leading-[120%] z-[1] mq450:text-[1.25rem] mq450:leading-[1.5rem]">
              Ghatkesar, India
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1.856rem] box-border min-w-[21.688rem] max-w-full text-[4rem] text-light font-racing-sans-one mq450:min-w-full">
        <div className="self-stretch flex flex-col items-end justify-start gap-[0.506rem] max-w-full">
          <div className="flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[1.25rem] box-border gap-[1.5rem] shrink-0 [debug_commit:1de1738] max-w-full mq725:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-[2.531rem] px-[0rem] pb-[0rem]">
              <div className="w-[3.25rem] h-[0.125rem] relative box-border border-t-[2px] border-solid border-light" />
            </div>
            <h1 className="m-0 relative text-inherit font-normal font-inherit inline-block max-w-full mq450:text-[2.375rem] mq975:text-[3.188rem]"  ref={headingRef} >
           To Do Now
            </h1>
            <div className="flex flex-col items-start justify-start pt-[2.531rem] px-[0rem] pb-[0rem]">
              <div className="w-[3.25rem] h-[0.125rem] relative box-border border-t-[2px] border-solid border-light" />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[1.356rem] pl-[0rem] box-border max-w-full">
            <div className="h-[1.481rem] flex-1 flex flex-row items-end justify-start pt-[0.737rem] px-[0rem] pb-[0.618rem] box-border relative gap-[2rem] shrink-0 [debug_commit:1de1738] max-w-full mq450:gap-[1rem]">
              <div className="h-[0.125rem] w-[15.125rem] relative box-border border-t-[2px] border-solid border-light" />
              <img
                className="mb-[-0.875rem] h-[2rem] w-[2rem] relative cursor-pointer"
                loading="lazy"
                alt=""
                src="/notepencil.svg"
                onClick={makeHeadingEditable}
              />
              <div className="h-[0.125rem] w-[15.125rem] absolute !m-[0] right-[-4.094rem] bottom-[0.619rem] box-border border-t-[2px] border-solid border-light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FRAMEA;
