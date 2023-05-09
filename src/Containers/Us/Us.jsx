import { UsParagraph, UsTitle } from '../../Components'
import '../styles/Us.sass'

const Us = () => {
  return (
    <div className='us-container' id='Us'>
      <div className='us-layout'>
        <UsTitle />
        <UsParagraph />
      </div>
    </div>
  )
}

export default Us
