import { TextField, TextFieldProps } from '@mui/material'
import { useFormContext } from 'react-hook-form'

const Input = ({ label, name, ...textFieldProps }: TextFieldProps & { name: string }) => {
  const { register, getFieldState } = useFormContext()
  const { invalid } = getFieldState(name)
  return (
    <TextField {...textFieldProps} {...register(name)} error={invalid} label={label} size="small" />
  )
}

export default Input
