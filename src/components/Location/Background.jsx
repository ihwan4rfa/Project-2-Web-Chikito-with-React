import Ellipse from '../../assets/Ellipse3.png'

const Background = () => {
    return (
        <div>
            <div className="background-location"></div>
            <div className="ellipse-location">
                <img src={Ellipse} alt="Ellipse" />
            </div>
        </div>
    )
}

export default Background;