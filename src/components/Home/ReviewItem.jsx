const ReviewItem = (props) => {

    const { menuName, menuStar, menuPrice, menuImage } = props;

    console.log(menuName);

    return (
        menuName.map((item, index) => (
            <div className="review-item">
                <a href="#">{item}</a>
                <div className="review-item-content">
                    <div className="text-yellow">
                        {[...Array(menuStar[index])].map(() => (
                            <i className='bx bxs-star'></i>
                        ))}
                    </div>
                    <p>{menuPrice[index]}</p>
                </div>
                <img src={menuImage[index]} alt="menu1" />
            </div>
        ))
    )
}

export default ReviewItem;