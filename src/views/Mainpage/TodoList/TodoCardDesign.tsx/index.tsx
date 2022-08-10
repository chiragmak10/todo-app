import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import { FC, ReactElement, useState } from 'react';
import { useMockData } from '../../../../common/hooks/mockData';

interface Props {
  todo: {
    id: string;
    taskName: string;
  };
}

export const TodoCardDesign: FC<Props> = ({ todo }): ReactElement => {
  const [textField, setTextField] = useState({ enable: false, value: '' });
  const { mockData, setMockData } = useMockData();
  return (
    <Card
      onDoubleClick={() => {
        setTextField({ enable: true, value: todo.id });
      }}
      key={todo.id}
      css={{
        margin: 10,
        alignItems: 'center',
      }}
    >
      <CardContent>
        {textField && todo.id === textField.value ? (
          <Grid
            css={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <TextField
              id="filled-basic"
              label=""
              fullWidth
              variant="standard"
              color="primary"
              value={todo.taskName}
              name="taskName"
              css={{
                marginRight: 10,
              }}
              onChange={(e) => {
                todo.taskName = e.target.value;
                setMockData([...mockData]);
              }}
            />
            <FontAwesomeIcon
              icon={faCheck}
              onClick={() => {
                setTextField({ enable: false, value: '' });
              }}
            />
          </Grid>
        ) : (
          <Grid
            css={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Typography>{todo.taskName}</Typography>
            <FontAwesomeIcon
              onClick={() => {
                setMockData(
                  mockData.map((y) => {
                    return {
                      ...y,
                      sectionItems: y.sectionItems.filter(
                        (z) => z.id !== todo.id,
                      ),
                    };
                  }),
                );
              }}
              color="#ff2b2b"
              icon={faTimes}
            />
          </Grid>
        )}
      </CardContent>
    </Card>
  );
};
