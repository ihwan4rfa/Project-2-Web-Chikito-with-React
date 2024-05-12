import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'
import '../Home/style.css'

const Review = () => {
    return (
        <section id="people-review" className="people-review-section">
            <div className='content'>
                <ContentLeft />
                <ContentRight />
            </div>
        </section>
    )
}

export default Review;