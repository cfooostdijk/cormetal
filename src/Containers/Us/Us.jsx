import { usData } from '../../Assets/Data'
import '../styles/Us.sass'

const Us = () => {
  return (
    <div className='us-container' id='Us'>
      <div className='us-layout'>
        {usData.map(us => (
          <>
            <h1>{us.title}</h1>
            <p>{us.paragraph1}</p>
            <p>{us.paragraph2}</p>
            <p>{us.paragraph3}</p>
          </>
        ))}
      </div>
    </div>
  )
}

export default Us
