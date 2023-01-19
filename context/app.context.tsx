import { createContext, PropsWithChildren, useCallback, useState } from 'react';
import { IMenuItem } from '../interfaces/menu.interfaces';
import { TopLevelCategory } from '../interfaces/page.interfaces';

export interface IAppContext {
  menu: IMenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (menu: IMenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
});

export const AppContextProvider = ({
  menu,
  firstCategory,
  children,
}: PropsWithChildren<IAppContext>): JSX.Element => {
  const [menuState, setMenuState] = useState<IMenuItem[]>(menu);
  const setMenu = useCallback((newMenu: IMenuItem[]): void => {
    setMenuState(newMenu);
  }, []);

  return (
    <AppContext.Provider value={{ menu: menuState, setMenu, firstCategory }}>
      {children}
    </AppContext.Provider>
  );
};
