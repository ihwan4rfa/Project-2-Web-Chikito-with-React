import LineSosmed from '../../assets/Line1.png'

const SocialMediaList = ({ icon }) => {
    return (
        <div className='social-media'>
            <img className='img-sosmed' src={LineSosmed} alt="" />
            {icon.map((item) => (
                <a target='_blank' href="https://www.instagram.com/chikito.id" className={item}></a>
            ))}
        </div>
    )
}

export default SocialMediaList;