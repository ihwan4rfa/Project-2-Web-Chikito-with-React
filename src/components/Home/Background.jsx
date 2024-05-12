import Ellipse from '../../assets/Ellipse3.png'

const Background = () => {
    return (
        <div>
            <div className="background"></div>
            <div className="ellipse">
                <img src={Ellipse} alt="Ellipse" />
            </div>
        </div>
    )
}

export default Background;