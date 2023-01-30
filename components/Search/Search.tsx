import classNames from 'classnames';
import { Input } from '../Input/Input';
import { ISearchProps } from './Search.types';
import styles from './Search.module.css';
import SearchIcon from './search.svg';
import Button from '../Button/Button';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { useRouter } from 'next/router';

export const Search = ({ className, ...props }: ISearchProps): JSX.Element => {
  const [searchString, setSearchString] = useState('');
  const router = useRouter();

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchString(e.target.value);
  };

  const onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  const onSubmit = (): void => {
    router.push({
      pathname: '/search',
      query: {
        q: searchString,
      },
    });
    setSearchString('');
  };

  return (
    <div className={classNames(styles.search, className)} {...props}>
      <Input
        placeholder="Поиск..."
        className={styles.input}
        value={searchString}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <Button appearance="primary" className={styles.button} onClick={onSubmit}>
        <SearchIcon />
      </Button>
    </div>
  );
};
