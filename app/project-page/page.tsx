import '../../style/projectItem.css'
import dynamic from 'next/dynamic'

const page = dynamic(() => import('../../components/Content'), { ssr: false })

export default page
