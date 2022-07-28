import { Button, Grid, TextField } from '@mui/material'
import { Form, Formik } from 'formik'
import { FC, ReactElement } from 'react'
import { useMockData } from '../../../../common/hooks/mockData'
import { v4 as uuidv4 } from 'uuid'
interface Props {
  id?: string
}
interface FormType {
  taskName: string
}
export const InputForm: FC<Props> = (): ReactElement => {
  const { mockData, setMockData } = useMockData()
  return (
    <Formik<FormType>
      initialValues={{ taskName: '' }}
      enableReinitialize
      onSubmit={async (values, { resetForm }) => {
        mockData
          .find((x) => x.active)
          ?.sectionItems?.push({ id: uuidv4(), taskName: values.taskName })

        setMockData([...mockData])
        resetForm()
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <Grid
            container
            css={{
              width: '80%',
              marginLeft: 'auto',
              marginRight: 'auto',
              flexWrap: 'nowrap',
            }}
            paddingBottom={6}
          >
            <TextField
              id="standard-basic"
              label="Todo...."
              variant="standard"
              fullWidth
              value={values.taskName}
              name="taskName"
              css={{
                marginRight: 10,
              }}
              onChange={(e) => {
                setFieldValue('taskName', e.target.value)
              }}
            />

            <Button
              disabled={values.taskName.length < 3}
              variant="text"
              size="small"
              type="submit"
            >
              Add
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}
