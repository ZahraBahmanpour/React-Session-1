import Form from "./components/Form";

function App() {
  const title = <span style={{ backgroundColor: "red" }}>New Title</span>;
  return (
    <div>
      <Form title={["title1", "title2"]} color="blue" />
      <h1 className="heading">Hello World</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
        debitis molestias iure beatae assumenda dolore vitae provident
        doloremque blanditiis quos dicta nostrum suscipit quidem odit, expedita
        atque repudiandae! Molestiae, iure {title}.
      </p>
    </div>
  );
}

export default App;
