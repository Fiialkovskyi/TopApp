import { GetStaticProps } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { Paragraph, Rating, Tag, Title } from '../components';
import { withLayout } from '../Layout/Layout';
import { IMenuItem } from '../interfaces/menu.interfaces';
import { Input } from '../components/Input/Input';
import { Textarea } from '../components/Textarea/Textarea';

interface IHomeProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: number;
}

function Home({ menu }: IHomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(0);
  return (
    <>
      <Title tag="h1">Test</Title>
      <Paragraph size="s">Lorem ipsum</Paragraph>
      <Paragraph size="m">Lorem ipsum</Paragraph>
      <Paragraph size="l">Lorem ipsum</Paragraph>
      <Tag size="s">Small</Tag>
      <Tag size="m">Medium</Tag>
      <Tag type="ghost">Ghost</Tag>
      <Tag type="danger">danger</Tag>
      <Tag type="secondary">secondary</Tag>
      <Tag type="primary">primary</Tag>
      <Tag type="success">success</Tag>
      <Rating rating={rating} isEditable onRatingChange={setRating} />
      <ul>
        {menu.map(item => (
          <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
        ))}
      </ul>
      <Input placeholder="test" />
      <Textarea placeholder="test" />
    </>
  );
}

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<IMenuItem[]>(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
    {
      firstCategory,
    },
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

export default withLayout(Home);
