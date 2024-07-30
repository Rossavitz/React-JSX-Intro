const Person = (props) => {
  const ageText = props.age >= 18 ? "please go vote!" : "you must be 18";
  const hobbies = props.hobby.map((h) => <li>{h}</li>);

  return (
    <div>
      <p> Learn some information about this person</p>
      <ul>
        <li>Name: {props.name.slice(0, 6)}</li>
        <li>Age: {props.age}</li>
        <ul>
          Hobbies:
          {hobbies}
        </ul>
      </ul>
      <h3>{ageText}</h3>
    </div>
  );
};
