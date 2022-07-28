import { Card, CardContent, Grid, Typography } from '@mui/material'
import { useMockData } from '../../../common/hooks/mockData'

export const TodoList = () => {
  const { mockData } = useMockData()

  return (
    <Grid css={{ margin: 8 }}>
      {mockData
        ?.find((x) => x.active)
        ?.sectionItems?.map((x) => (
          <Card
            key={x.id}
            css={{
              margin: 2,
              alignItems: 'center',
            }}
          >
            <CardContent>
              <Typography>{x.taskName}</Typography>
            </CardContent>
          </Card>
        ))}
    </Grid>
  )
}
