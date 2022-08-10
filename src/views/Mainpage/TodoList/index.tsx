import { Grid } from '@mui/material';
import { useMockData } from '../../../common/hooks/mockData';
import { TodoCardDesign } from './TodoCardDesign.tsx';
export const TodoList = () => {
  const { mockData } = useMockData();

  return (
    <Grid css={{ margin: 8 }}>
      {mockData
        ?.find((x) => x.active)
        ?.sectionItems?.map((todo) => (
          <TodoCardDesign todo={todo} />
        ))}
    </Grid>
  );
};
