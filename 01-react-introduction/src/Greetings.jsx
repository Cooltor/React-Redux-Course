export function Greetings(props) {
  if (props.age < 18) return <p>Sorry, you are too young</p>;

  return (
    <ul>
      <li>Hello {props.firstName}</li>
      <li>You are {props.age} yo</li>
      <li>{props.itsSunny ? <ItsSunny /> : <ItsRainy />}</li>
    </ul>
  );
}

function ItsSunny() {
  return <p>It is sunny today</p>;
}

function ItsRainy() {
  return <p>It is rainy today</p>;
}
