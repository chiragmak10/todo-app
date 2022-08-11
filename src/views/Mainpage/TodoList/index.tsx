import { Grid } from '@mui/material';
import { MockData, useMockData } from '../../../common/hooks/mockData';
import { TodoCardItem } from './TodoCardItem';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { reorder } from './utils';

export const TodoList = () => {
  const { mockData, setMockData } = useMockData();

  return (
    <Grid css={{ margin: 8 }}>
      <DragDropContext
        onDragEnd={({ destination, source }) => {
          if (!destination) return;
          const newItems = reorder(mockData, source.index, destination.index);
          setMockData(newItems);
        }}
      >
        <Droppable droppableId="droppable-list">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {mockData
                ?.find((x) => x.active)
                ?.sectionItems?.map((todo, index) => (
                  <TodoCardItem todo={todo} index={index} />
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Grid>
  );
};
