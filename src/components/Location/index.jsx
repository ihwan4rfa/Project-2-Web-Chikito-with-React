import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'
import '../Home/style.css'
import '../Menus/style.css'

const Location = () => {
    return (
        <section id="people-review" className="location-section">
            <div className='content'>
                <ContentLeft />
                {/* <ContentRight /> */}
            </div>
        </section>
    )
}

export default Location;