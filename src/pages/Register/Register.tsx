import { yupResolver } from '@hookform/resolvers/yup'
import { omit } from 'lodash'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { registerAccount } from 'src/apis/auth.api'
import InputFields from 'src/component/InputFields/InputFields'
import { ResponseApi } from 'src/types/untils'
import { Schema, schema } from 'src/untils/rules'
import { isAxiosUnprocessableEntityErrors } from 'src/untils/untils'

type Inputs = Schema

export default function Register() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema)
  })

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<Inputs, 'confirmPassword'>) => registerAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirmPassword'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        console.log(data, 'register success')
        toast.success('Registration successful!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000
        })
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityErrors<ResponseApi<Omit<Inputs, 'confirmPassword'>>>(error)) {
          toast.error('Registration failed!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000
          })
          const formErrors = error.response?.data.data
          if (formErrors?.email) {
            setError('email', {
              message: formErrors.email,
              type: 'Server'
            })
          }
          if (formErrors?.password) {
            setError('password', {
              message: formErrors.password,
              type: 'Server'
            })
          }
        }
      }
      // OnError là hàm sử lí lỗi khi api trả về lỗi 422 (Unprocessable Entity) thì sẽ vào hàm này để xử lí
      // Các bạn có thể xem thêm ở đây: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422
    })
  })

  return (
    <div>
      <div className='bg-cover bg-center bg-no-repeat bg-custom-image h-full w-full'>
        <div className='container'>
          <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
            <div className='lg:col-span-2 lg:col-start-4'>
              <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit} noValidate>
                <div className='text-2xl'>Đăng Ký</div>
                <InputFields
                  name='email'
                  register={register}
                  type='email'
                  className='mt-4'
                  errorMessage={errors.email?.message}
                  placeholder='Email'
                />
                <InputFields
                  name='password'
                  register={register}
                  type='password'
                  className='mt-4'
                  errorMessage={errors.password?.message}
                  placeholder='Password'
                />
                <InputFields
                  name='confirmPassword'
                  register={register}
                  type='password'
                  className='mt-4'
                  errorMessage={errors.confirmPassword?.message}
                  placeholder='Confirm Password'
                />
                <div className='mt-3'>
                  <button
                    type='submit'
                    className='w-full text-center py-4 px-2 bg-red-500 uppercase text-white text-sm:hover:bg-red-600'
                  >
                    Đăng ký
                  </button>
                </div>
                <div className='mt-3'>
                  <div className='text-center'>
                    <span className='text-gray-400'>Bạn đã có tài khoản? </span>
                    <Link to='/login' className='text-red-600'>
                      Đăng nhập
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
