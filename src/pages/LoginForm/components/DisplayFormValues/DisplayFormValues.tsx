import { Box, Typography } from '@mui/material'
import { FC } from 'react'

interface DisplayFormValuesProps {
  isDirty: boolean
  isValid: boolean
  values: {
    username: string
    password: string
  }
}

export const DisplayFormValues: FC<DisplayFormValuesProps> = ({
  isDirty, isValid, values
}) => (
  <Box color="grey.600" mt="10px">
    {isDirty && !isValid && (
    <>
      <Typography>
        username: 
        {' '}
        {values.username}
      </Typography>
      <Typography>
        password: 
        {' '}
        {values.password}
      </Typography>
    </>
    )}
  </Box>
)
