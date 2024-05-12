import Background from './Background'
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'

const Promo = () => {
    return (
        <section id="promo" className="promo-section">
            <Background />
            <div className='content flip'>
                <ContentLeft />
                <ContentRight />
            </div>
        </section>
    )
}

export default Promo;