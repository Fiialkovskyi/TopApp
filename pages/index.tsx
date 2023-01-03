import { useState } from "react";
import { Button, Paragraph, Rating, Tag, Title } from "../components";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(0);
  return (
    <>
      <Title tag='h1'>Test</Title>
      <Button appearence='primary' arrow='down'>
        Primary
      </Button>
      <Button appearence='ghost' arrow='right'>
        Ghost
      </Button>
      <Paragraph size='s'>Lorem ipsum</Paragraph>
      <Paragraph size='m'>Lorem ipsum</Paragraph>
      <Paragraph size='l'>Lorem ipsum</Paragraph>
      <Tag size='s'>Small</Tag>
      <Tag size='m'>Medium</Tag>
      <Tag type='ghost'>Ghost</Tag>
      <Tag type='danger'>danger</Tag>
      <Tag type='secondary'>secondary</Tag>
      <Tag type='primary'>primary</Tag>
      <Tag type='success'>success</Tag>
      <Rating rating={rating} isEditable onRatingChange={setRating} />
    </>
  );
}
