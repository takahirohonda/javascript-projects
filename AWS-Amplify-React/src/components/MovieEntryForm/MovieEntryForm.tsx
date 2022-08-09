import { Formik, Form } from 'formik'
import { TextFieldFormik } from 'components/TextFieldFormik/TextFieldFormik'

interface MovieEntryFormValues {
  title: string
}

export const MovieEntryForm = () => {
  const initialValues = {
    title: '',
  }
  return (
    <Formik<MovieEntryFormValues>
      initialValues={initialValues}
      onSubmit={() => console.log('form submitted')}
    >
      <Form>
        <TextFieldFormik label="title" name="title" />
      </Form>
    </Formik>
  )
}
