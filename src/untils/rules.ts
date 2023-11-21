// import type { RegisterOptions } from 'react-hook-form'

// type Rules = { [key in 'email' | 'password' | 'confirmPassword']?: RegisterOptions }

import * as yup from 'yup'

export const schema = yup.object({
  email: yup.string().required('Email là bắt buộc !').email('Email không đúng định dạng !'),
  password: yup.string().required('Mật khẩu là bắt buộc !').min(6, 'Mật khẩu phải có ít nhất 6 ký tự !'),
  confirmPassword: yup
    .string()
    .required('Mật khẩu là bắt buộc !')
    .oneOf([yup.ref('password')], 'Mật khẩu không khớp !')
    .min(6, 'Mật khẩu phải có ít nhất 6 ký tự !')
})

export const loginSchema = yup.object({
  email: yup.string().required('Email là bắt buộc !').email('Email không đúng định dạng !'),
  password: yup.string().required('Mật khẩu là bắt buộc !').min(6, 'Mật khẩu phải có ít nhất 6 ký tự !')
})

export type Schema = yup.InferType<typeof schema>

// export const rules: Rules = {
//   email: {
//     required: {
//       value: true,
//       message: 'Email là bắt buộc !'
//     },
//     pattern: {
//       value: /\S+@\S+\.\S+/,
//       message: 'Email không đúng định dạng !'
//     },
//     maxLength: {
//       value: 160,
//       message: 'Độ dài từ 5 - 160 ký tự !'
//     },
//     minLength: {
//       value: 5,
//       message: 'Độ dài từ 5 - 160 ký tự !'
//     }
//   },
//   password: {
//     required: {
//       value: true,
//       message: 'Mật khẩu là bắt buộc !'
//     },
//     minLength: {
//       value: 6,
//       message: 'Mật khẩu phải có ít nhất 6 ký tự !'
//     }
//   },
//   confirmPassword: {
//     required: {
//       value: true,
//       message: 'Mật khẩu là bắt buộc !'
//     },
//     minLength: {
//       value: 6,
//       message: 'Mật khẩu phải có ít nhất 6 ký tự !'
//     }
//   }
// }
