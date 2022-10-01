interface GreetProps {
  name?: string;
}

export default function Greet(props: GreetProps) {
  return <div>Greet {props.name}</div>;
}
