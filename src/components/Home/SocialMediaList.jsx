import LineSosmed from '../../assets/Line1.png'

const SocialMediaList = ({ icon }) => {
    return (
        <div className='social-media'>
            <img className='img-sosmed' src={LineSosmed} alt="" />
            {icon.map((item) => (
                <a href="#" className={item}></a>
            ))}
        </div>
    )
}

export default SocialMediaList;