import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CSSObject } from '@emotion/react'
import { useMockData } from '../../../common/hooks/mockData'
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { AddItems } from './AddItems'

export const Navbar = () => {
  const { mockData, setMockData } = useMockData()

  return (
    <Grid
      css={{
        borderRight: '1px solid black',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Grid item>
        <List disablePadding>
          {mockData.map((x) => (
            <ListItem
              key={x.sectionType}
              disablePadding
              css={{ background: x.active ? '#84b3ffeb' : '#d7d7d7' }}
              onClick={() => {
                setMockData(
                  mockData.map((y) =>
                    y.sectionType === x.sectionType
                      ? { ...y, active: true }
                      : { ...y, active: false }
                  )
                )
              }}
            >
              <ListItemButton
                onClick={(e) => {
                  console.log(e)
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
  )
}
