const Tweet = (props) => {
  return (
    <div className="tweet">
      <span id="username">Username: {props.username}</span>
      <span id="name">Name: {props.name}</span>
      <span id="date">Date: {props.date}</span>
      <span id="message">Message: {props.message}</span>
    </div>
  );
};
