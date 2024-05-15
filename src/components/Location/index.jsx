import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'
import Background from './Background'
import '../Home/style.css'
import '../Menus/style.css'

const Location = () => {
    return (
        <section id="people-review" className="location-section">
            <Background />
            <div className='content'>
                <ContentLeft />
                <ContentRight />
            </div>
        </section>
    )
}

export default Location;