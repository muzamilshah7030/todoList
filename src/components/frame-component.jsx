

const FrameComponent = ({ todoList, setTodoArray }) => {
  const handleDelete = (index)=>{
    const updatedTodoList = todoList.filter((list, i) => i !== index)
    setTodoArray(updatedTodoList)
  }
  return (
    <div>
      {todoList.map((todo, index) => {
        return (
          <div className="w-[58.375rem] flex flex-row items-start justify-start py-[0rem] px-[3.375rem] box-border max-w-full mq975:pl-[1.688rem] mq975:pr-[1.688rem] mq975:box-border mt-2" key={index}>
            <div className="flex-1 flex flex-col items-start justify-start gap-[2.187rem] max-w-full mq450:gap-[1.063rem]">
              <button className="cursor-pointer [border:none] py-[0rem] pr-[0rem] pl-[1.125rem] bg-gray-200 self-stretch rounded-3xs flex flex-row items-start justify-between box-border max-w-full gap-[1.25rem] mq975:flex-wrap mq975:pr-[1.125rem] mq975:pb-[1.125rem] mq975:box-border">
                <div className="self-stretch w-[51.375rem] relative rounded-3xs bg-gray-200 hidden max-w-full" />
                <div className="w-[41.438rem] flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem] box-border max-w-full">
                  <div className="self-stretch relative text-[1.188rem] font-inter text-light text-left z-[1]">
                {todo}
                  </div>
                </div>
                <div className="h-[2.375rem] w-[2.375rem] relative z-[1] active:animate-[1s_ease_0s_1_normal_none_shadow-inset-center] active:opacity-[1]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] hover:animate-[1s_ease_0s_1_normal_none_shadow-inset-center] hover:opacity-[1]">
                    <img
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/group-727.svg"
                      onClick={()=>{
                        handleDelete(index)
                      }}
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
        )
      })}

    </div>
  );
};

export default FrameComponent;
