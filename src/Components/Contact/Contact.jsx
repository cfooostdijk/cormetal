import '../styles/Contact.sass'

const Contact = () => {
  return (
    <div className='contact-container' id='ContactUs'>
      <div className='contact-layout'>
        <p className='contact-title'>Contacto</p>
        <a href="https://wa.me/5492262572060" style={{display: 'block'}}><p className='contact-paragraph'>+54 9 2262572060</p></a>
        <a href="https://wa.me/5492262572061" ><p className='contact-paragraph'>+54 9 2262572061</p></a>
        <a href="mailto:administracion@cormetalqqn.com.ar"><p className='contact-paragraph'>administracion@cormetalqqn.com.ar</p></a>
        <a href='https://goo.gl/maps/5Ff2fTmSaXfwSAy57' ><p className='contact-paragraph'>Quequén, Buenos Aires, Argentina</p></a>
      </div>
    </div>
  )
}

export default Contact
