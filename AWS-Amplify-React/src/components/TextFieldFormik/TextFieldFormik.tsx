import { useField } from 'formik'
import { TextField, TextFieldProps } from '@aws-amplify/ui-react'

interface TextFieldFormikProps extends TextFieldProps {
  name: string
}
export const TextFieldFormik = ({
  label,
  name,
  ...props
}: TextFieldFormikProps) => {
  const [field, , helpers] = useField({ name })
  const { onBlur } = field
  const { setValue } = helpers

  return (
    <TextField
      label={label}
      name={name}
      onChange={setValue}
      onBlur={onBlur}
      {...props}
    />
  )
}
