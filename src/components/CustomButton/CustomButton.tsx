import { Button } from '@mui/material'
import { FC, ReactNode } from 'react'

export interface CustomButtonPros {
  isDirty: boolean
  isValid: boolean
  children: ReactNode
  type: 'submit' | 'text' | 'reset' | undefined
}

export const CustomButton: FC<CustomButtonPros> = ({
  isDirty, isValid, children, type = 'submit'
}) => (
  <Button type={type} fullWidth variant="contained" disabled={!isDirty || !isValid}>
    {children}
  </Button>
)
