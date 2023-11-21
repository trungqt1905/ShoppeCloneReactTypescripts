import Footer from 'src/component/Footer'
import RegisterHeader from 'src/component/RegisterHeader.tsx'

interface Props {
  children?: React.ReactNode
}
export default function RegisterLayout({ children }: Props) {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  )
}
