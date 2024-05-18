const SocialMediaList = ({ icon }) => {
    return (
        <div className='social-media-footer'>
            {icon.map((item) => (
                <a target='_blank' href="https://www.instagram.com/chikito.id" className={item}></a>
            ))}
        </div>
    )
}

export default SocialMediaList;