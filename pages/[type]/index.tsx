import axios from 'axios';
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next/types';
import { ParsedUrlQuery } from 'querystring';
import { firstLevelMenu } from '../../helpers/helpers';
import { IMenuItem } from '../../interfaces/menu.interfaces';
import { TopLevelCategory } from '../../interfaces/page.interfaces';
import { withLayout } from '../../Layout/Layout';

interface ITypeProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: TopLevelCategory;
}

const Type = ({ firstCategory }: ITypeProps): JSX.Element => {
  return <div>Type: {firstCategory}</div>;
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    fallback: true,
    paths: firstLevelMenu.map(item => `/${item.route}`),
  };
};

export const getStaticProps: GetStaticProps<ITypeProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const type = firstLevelMenu.find(item => item.route === params.type);

  if (!type) {
    return {
      notFound: true,
    };
  }

  try {
    const { data: menu } = await axios.post<IMenuItem[]>(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
      {
        firstCategory: type.id,
      },
    );
    return {
      props: {
        menu,
        firstCategory: type.id,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default withLayout(Type);
