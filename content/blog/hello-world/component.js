import React from "react";

function Component () {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const int = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    return () => clearInterval(int);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>This was made using mdx.</p>
    </div>
  )
}

export default Component;
