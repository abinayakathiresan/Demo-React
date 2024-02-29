import React from 'react';
// function expression
const FunctionCmp = function (props) {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("");
  
  const testRef = React.useRef();
  const incrementCounter = function () {
    const currentCount = count + 1;
    setCount(currentCount);
    props.parentFun(currentCount);
    

  };
  const focusRef = function () {
    testRef.current.focus();
  };
  const textChange = function (event) {
    setText(event.target.value);
    props.ctopFuninchild(text);
  };
  return (
    <>
      <div>Function Component</div>
      <div>Name: {props.name}</div>
      <div>Count:{count}</div>
      <div>
        <button onClick={incrementCounter}>Increment</button>
      </div>
      <div>
        <input type="text" ref={testRef} />
      </div>
      <div>
        <button onClick={focusRef}>Focus Reference</button>
      </div>
      <div>
        <input type="text" onChange={textChange} />
      </div>
      <div>{text}</div>
    </>
  );
};

export default FunctionCmp;
