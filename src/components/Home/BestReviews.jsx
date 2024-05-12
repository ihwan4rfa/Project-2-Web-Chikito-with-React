import Menu1 from '../../assets/menu1.png'
import Menu2 from '../../assets/menu2.png'
import ReviewItem from './ReviewItem';

const BestReviews = () => {

    const reviews = [
        {
            menuName: "Original Chicken Steak",
            menuPrice: "23k",
            menuImage: Menu1,
            star: 5
        },
        {
            menuName: "Chikito Onion",
            menuPrice: "21k",
            menuImage: Menu2,
            star: 4
        }
    ]

    return (
        <div className="reviews-section">
            <div className="reviews-content">
                <h1 className="reviews-title">BEST REVIEWS</h1>
                <div className="reviews-layout">
                    {reviews.map((review) => (
                        <ReviewItem
                            menuName={[review.menuName]}
                            menuStar={[review.star]}
                            menuPrice={[review.menuPrice]}
                            menuImage={[review.menuImage]}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BestReviews;