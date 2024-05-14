import FRAMEA from "../components/f-r-a-m-e-a.jsx";
import FrameComponent1 from "../components/frame-component1.jsx";
import FrameComponent from "../components/frame-component.jsx";
import { useState } from "react";

const Desktop = () => {
  const [todoArray, setTodoArray] = useState([])
  const addTodo = (newTodo)=>{
    setTodoArray([...todoArray, newTodo])
    console.log(todoArray)
  }
  return (
    <div className="w-full relative bg-gray-100 overflow-hidden flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[27.875rem] box-border gap-[3.1rem] leading-[normal] tracking-[normal] mq725:gap-[1.563rem]">
      <FRAMEA />
      <section className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[2.75rem] box-border max-w-full mq1025:pl-[1.375rem] mq1025:box-border">
        <div className="w-[60.388rem] flex flex-col items-start justify-start gap-[4.968rem] max-w-full mq725:gap-[1.25rem] mq975:gap-[2.5rem]">
          <FrameComponent1 addTodo={addTodo}/>
          <FrameComponent todoList={todoArray} setTodoArray={setTodoArray}/>
        </div>
      </section>
    </div>
  );
};

export default Desktop;
