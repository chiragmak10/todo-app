import { Card, CardContent, Grid, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useMockData } from '../../../common/hooks/mockData'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const TodoList = () => {
  const { mockData, setMockData } = useMockData()
  const [textField, setTextField] = useState({ enable: false, value: '' })
  return (
    <Grid css={{ margin: 8 }}>
      {mockData
        ?.find((x) => x.active)
        ?.sectionItems?.map((x) => (
          <Card
            onDoubleClick={() => {
              setTextField({ enable: true, value: x.id })
            }}
            key={x.id}
            css={{
              margin: 10,
              alignItems: 'center',
            }}
          >
            <CardContent>
              {textField && x.id === textField.value ? (
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
                    value={x.taskName}
                    // InputProps={{ disableUnderline: true }}
                    name="taskName"
                    css={{
                      marginRight: 10,
                    }}
                    onChange={(e) => {
                      x.taskName = e.target.value
                      setMockData([...mockData])
                    }}
                  />

                  <FontAwesomeIcon
                    icon={faCheck}
                    onClick={() => {
                      setTextField({ enable: false, value: '' })
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
                  <Typography>{x.taskName}</Typography>
                  <FontAwesomeIcon
                    onClick={() => {
                      setMockData(
                        mockData.map((y) => {
                          return {
                            ...y,
                            sectionItems: y.sectionItems.filter(
                              (z) => z.id !== x.id
                            ),
                          }
                        })
                      )
                    }}
                    color="#ff2b2b"
                    icon={faTimes}
                  />
                </Grid>
              )}
            </CardContent>
          </Card>
        ))}
    </Grid>
  )
}
