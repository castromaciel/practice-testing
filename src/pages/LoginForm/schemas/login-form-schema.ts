import * as yup from 'yup'

export const loginFormSchema = yup.object().shape({
  username: yup.string()
    .required('username is required')
    .max(12, 'username maximum length is 12 characters.'),
  password: yup.string()
    .required('username is required')
    .min(8, 'Password minimum length is 8 characters.')
    .max(16, 'Password maximum length is 16 characters.')
    .matches(
      /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
      'The password must have between 8 and 16 characters, at least one digit, at least one lower case and at least one upper case'
    )
    .required()
})
