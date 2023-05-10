import '../styles/ClientCard.sass'

const ClientCard = ({ client }) => {
  return (
    <div className='client-card' style={{ backgroundImage: `url(${client.image})` }} >
    </div>
	)
}

export default ClientCard
