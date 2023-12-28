// This component is defined once but can be rendered every time we call it
function Random() {
  let number = Math.random() * 100;
  return (
    <p style={{ "background-color": "#897892" }}>
      This is a random number : {Math.round(number)}
    </p>
  );
}

export default Random;
