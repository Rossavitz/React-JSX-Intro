const App = () => (
  <div>
    <Tweet username="U1" name="N1" date="7/29/24" message="Testing Tweet One" />
    <Tweet username="U2" name="N2" date="7/30/24" message="Testing Tweet Two" />
    <Tweet
      username="U3"
      name="N3"
      date="7/31/24"
      message="Testing Tweet Three"
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
