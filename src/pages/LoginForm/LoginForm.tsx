import { yupResolver } from '@hookform/resolvers/yup'
import { Box } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { CustomButton, CustomInput } from '../../components'
import { DisplayFormValues } from './components'
import { FormProps } from './interfaces'
import { loginFormSchema } from './schemas/login-form-schema'
import { callEndpoint } from './services/call-endpoint'

const LoginForm = () => {
  const {
    register, handleSubmit, watch, formState: { errors, isDirty, isValid }, reset
  } = useForm<FormProps>({
    defaultValues: {
      username: '',
      password: ''
    },
    mode: 'onChange',
    resolver: yupResolver(loginFormSchema)
  })

  const username = watch('username')
  const password = watch('password')

  const onSubmit = async (data: any) => {
    const result = await callEndpoint(data)
    console.log(result)
    reset()
  }

  return (
    <Box sx={{
      bgcolor: 'grey.300',
      borderRadius: '30px',
      p: '50px',
      width: '50%'
    }}
    >
      {username}
      {password}
      {/* @ts-ignore */}
      <FormProvider {... { register, errors }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <CustomInput
              name="username"
              label="Username"
              required
            />
            <CustomInput
              name="password"
              label="Password"
              required
            />

            <CustomButton isDirty={isDirty} isValid={isValid} type="submit">
              Login
            </CustomButton>
          </Box>
        </form>
      </FormProvider>
      <DisplayFormValues isDirty={isDirty} isValid={isValid} values={{ username, password }} />
      
    </Box>
  ) 
}

export default LoginForm
