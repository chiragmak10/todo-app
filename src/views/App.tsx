import { FC, ReactElement, useState } from 'react';
import { Navbar } from './Mainpage/ItemSection';
import { DisplaySection } from './Mainpage';
import { mockData, MockData, MockDataContext } from '../common/hooks/mockData';
import { Grid } from '@mui/material';
import useLocalStorageState from 'use-local-storage-state';

interface Props {
  id?: string;
}

export const App: FC<Props> = (): ReactElement => {
  const [mockTodoList, setMockTodoList] = useLocalStorageState('todos', {
    defaultValue: mockData,
  });
  return (
    <MockDataContext.Provider
      value={{ mockData: mockTodoList, setMockData: setMockTodoList }}
    >
      <Grid
        container
        css={{
          display: 'grid',
          height: '100vh',
          width: '100vw',
          gridTemplateColumns: '0.18fr 1fr ',
        }}
      >
        <Grid
          css={{
            background: '#f0f0f0',
          }}
        >
          <Navbar />
        </Grid>
        <DisplaySection />
      </Grid>
    </MockDataContext.Provider>
  );
};
