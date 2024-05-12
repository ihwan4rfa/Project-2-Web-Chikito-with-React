import Background from './Background'
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'
import BestReviews from './BestReviews'
import './style.css'


const Home = () => {

    return (
        <section id="home" className="home-section">
            <Background />
            <div className='content'>
                <ContentLeft />
                <ContentRight />
            </div>
            <BestReviews />
        </section>
    )
}

export default Home;