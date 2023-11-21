import type { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface Props {
  type: string
  errorMessage?: string
  placeholder?: string
  className?: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
  rules?: RegisterOptions
}

export default function InputFields({ type, errorMessage, placeholder, className, name, register, rules }: Props) {
  return (
    <div className={className}>
      <input
        type={type}
        className='py-3 w-full pl-2 outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
        placeholder={placeholder}
        {...register(name, rules)}
      />
      <div className='mt-1 text-red-600 min-h-[1rem] text-sm'>{errorMessage}</div>
    </div>
  )
}
