import { useState } from "react";

const FrameComponent1 = ({addTodo}) => {
  const [input, setInput] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      addTodo(input);
      setInput("");
    }
  }

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[2.181rem] max-w-full text-left text-[1.563rem] text-light font-racing-sans-one mq725:gap-[1.063rem]">
      <form onSubmit={handleSubmit}>
        <div className="w-[59.556rem] flex flex-row items-start justify-start py-[0rem] pr-[3.625rem] pl-[3.612rem] box-border max-w-full mq975:pl-[1.813rem] mq975:pr-[1.813rem] mq975:box-border">
          <div className="h-[3.088rem] flex-1 relative max-w-full">
            <div className="absolute h-full top-[0rem] bottom-[0rem] left-[0rem] rounded-xl bg-gainsboro w-[51.631rem]">
              <input type="text" className="text-lg absolute top-[0rem] left-[0rem] rounded-xl bg-gainsboro w-full h-full  font-roboto" value={input} onChange={(e)=>{
                setInput(e.target.value)
              }}/>

              <div className="absolute h-full top-[0.060rem] bottom-[0rem] left-[42.823rem] rounded-xl bg-dimgray w-[8.919rem] z-[1] active:animate-[1s_ease_0s_1_normal_none_shadow-inset-center] active:opacity-[1] text-7xl" />
            </div>
            <div className="absolute top-[0.338rem] left-[44.056rem] inline-block w-[8.275rem] h-[2.031rem] z-[2] mq450:text-[1.25rem]" role="button"
              aria-label="button" onClick={handleSubmit}>
              Add task
            </div>
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full object-contain mt-[-0.063rem]"
          alt=""
        />
      </form>
    </div>
  );
};

export default FrameComponent1;
