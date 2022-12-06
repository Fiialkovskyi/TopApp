import { Button, Title } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Title tag='h1'>Test</Title>
      <Button appearence='primary'>Primary</Button>
      <Button appearence='ghost'>Ghost</Button>
    </>
  );
}
