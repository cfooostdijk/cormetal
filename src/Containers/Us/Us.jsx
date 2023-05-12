import { usData } from '../../Assets/Data'
import '../styles/Us.sass'

const Us = () => {
  return (
    <div className="us-container" id="Us">
      <div className="us-layout">
        {usData.map((data) => (
          <section key={data.title}>
            <h1>{data.title}</h1>
            {data.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </div>
  )
}

export default Us
