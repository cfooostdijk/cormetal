import '../styles/ClientCard.sass'

const ClientCard = ({ client }) => {
  return (
    <div className='client-card'>
      <img className='client-image' src={client.image} alt={client.name} />
    </div>
	)
}

export default ClientCard
