import ClientList from '../../Components/Lists/ClientList'
import '../styles/Clients.sass'

const Clients = () => {
  return (
    <div className='clients-container' id='Clients'>
      <div className='clients-layout'>
        <ClientList />
      </div>
    </div>
  )
}

export default Clients
