import { useMockData } from '../../../common/hooks/mockData';
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { AddItems } from './AddItems';

export const Navbar = () => {
  const { mockData, setMockData } = useMockData();

  return (
    <Grid
      css={{
        borderRight: '1.4px solid #0000003b',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Grid item>
        <List css={{ margin: 10 }}>
          {mockData.map((x) => (
            <ListItem
              key={x.sectionType}
              disablePadding
              css={{
                borderRadius: 12,
                background: x.active ? '#84b3ffeb' : '#f0f0f0',
              }}
              onClick={() => {
                setMockData(
                  mockData.map((y) =>
                    y.sectionType === x.sectionType
                      ? { ...y, active: true }
                      : { ...y, active: false },
                  ),
                );
              }}
            >
              <ListItemButton
                onClick={(e) => {
                  // console.log(e);
                }}
              >
                <ListItemText primary={x.sectionType} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item>
        <AddItems />
      </Grid>
    </Grid>
  );
};
