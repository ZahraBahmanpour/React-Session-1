import { useState } from "react";

function Form(props) {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [person, setPerson] = useState({ age: 23, name: "Sarah" });

  const { title, color } = props;
  console.log("rendered again");

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = { username, password };
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {title ? title[0] : ""}
        {title ? title[1] : ""}
        <input type="submit" value={"login"} />
      </form>
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
      <button onClick={() => setPerson({ ...person, age: 30 })}>
        Update Age
      </button>
      {person.age}
      {person.name}
    </>
  );
}

export default Form;
