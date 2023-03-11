import { TextField, Typography } from '@mui/material'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

interface Props {
  name: string
  label: string
  type?: string
  disabled?: boolean
  required?: boolean
}

const formValidation = (errors: any, errorKey: string) => (errors[errorKey] ? <Typography color="red">{errors[errorKey].message}</Typography> : '')

export const CustomInput: FC<Props> = ({
  name = '', label = '', type = 'text', disabled = false, required = false
}) => {
  /* @ts-ignore */
  const { register, errors } = useFormContext()

  return (
    <>
      <TextField
        type={type} 
        required={required}
        disabled={disabled}
        label={label}
        error={errors && !!errors[name]}
        variant="outlined"
        {...register(name)}
      />
      {errors && formValidation(errors, name)}
    </>
  )
}
