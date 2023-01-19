import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { firstLevelMenu } from '../../helpers/helpers';
import { IMenuItem } from '../../interfaces/menu.interfaces';
import {
  ITopPageModel,
  TopLevelCategory,
} from '../../interfaces/page.interfaces';
import { IProductModel } from '../../interfaces/product.interfaces';
import { withLayout } from '../../Layout/Layout';

interface ICourseProps extends Record<string, unknown> {
  menu: IMenuItem[];
  page: ITopPageModel;
  products: IProductModel[];
  firstCategory: TopLevelCategory;
}

const Course = ({
  menu,
  page,
  products,
  firstCategory,
}: ICourseProps): JSX.Element => {
  return <div>{products && products.length}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];

  for (const firstLevelMenuItem of firstLevelMenu) {
    const { data: menu } = await axios.post<IMenuItem[]>(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
      {
        firstCategory: firstLevelMenuItem.id,
      },
    );

    paths = paths.concat(
      menu.flatMap(menuItem =>
        menuItem.pages.map(
          page => `/${firstLevelMenuItem.route}/${page.alias}`,
        ),
      ),
    );
  }

  return {
    fallback: true,
    paths,
  };
};

export const getStaticProps: GetStaticProps = async ({
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
        firstCategory: type?.id,
      },
    );

    if (menu.length === 0) {
      return {
        notFound: true,
      };
    }

    const { data: page } = await axios.get<ITopPageModel>(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${params.alias}`,
    );

    const { data: products } = await axios.post<IProductModel[]>(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`,
      {
        category: page.category,
        limit: 10,
      },
    );

    return {
      props: { menu, page, products, firstCategory: type.id },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default withLayout(Course);
