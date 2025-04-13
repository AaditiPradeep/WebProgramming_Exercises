// Parent.js
import Child from './Child';

function Parent() {
  const msg = "Hello from the Parent component!";

  return (
    <div>
      <h2>Parent Component</h2>
      <Child message={msg} />
    </div>
  );
}

export default Parent;
