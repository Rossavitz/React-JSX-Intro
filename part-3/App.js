const App = () => (
  <div>
    <Person name="Ross" age="39" hobby={["dogs", "school", "food"]} />
    <Person
      name="Jeannine"
      age="21"
      hobby={["reading", "dancing", "watching tv"]}
    />
    <Person name="Tim" age="12" hobby={["video games", "movies"]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
