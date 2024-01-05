let CurrentTime = () => {
  let time = new Date();
  return (
    <p>
      This is current Date and Time :- {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
