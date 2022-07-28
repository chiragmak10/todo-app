import { Grid, TextField } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import { FC, ReactElement } from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useMockData } from '../../../../common/hooks/mockData'
import { v4 as uuidv4 } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@mui/material'
interface Props {
  id?: string
}
interface FormType {
  name: string
}
export const AddItems: FC<Props> = (): ReactElement => {
  const { mockData, setMockData } = useMockData()

  return (
    <Formik<FormType>
      initialValues={{ name: '' }}
      enableReinitialize
      onSubmit={async (values, { resetForm }) => {
        const newMockData = mockData.map((item) => {
          return { ...item, active: false }
        })
        newMockData.push({
          active: true,
          sectionType: values.name,
          sectionItems: [],
        })
        setMockData([...newMockData])
        resetForm()
      }}
    >
      {({ isSubmitting, resetForm, values, setFieldValue }) => (
        <Form>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent={'center'}
            marginLeft={'auto'}
            marginRight={'auto'}
            paddingBottom={6}
          >
            <Grid container xs={8} item>
              <TextField
                id="standard-basic"
                label="Add Section..."
                name="name"
                variant="standard"
                onChange={(e) => {
                  setFieldValue('name', e.target.value)
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="text"
                size="large"
                disabled={values.name.length < 5}
                type="submit"
              >
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}
