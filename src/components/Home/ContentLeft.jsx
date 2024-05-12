import SocialMediaList from './SocialMediaList'
import TwinsButton from './TwinsButton';

const ContentLeft = () => {

    const sosmedList = ["bx bxl-instagram", "bx bxl-facebook", "bx bxl-twitter", "bx bxl-tiktok"];

    return (
        <div className='content-left'>
            <SocialMediaList icon={sosmedList} />
            <h1 className='text-title'>CHICKEN BAR <span><br />AND<span className='color-primary'> STEAK</span></span></h1>
            <p className='text-description'>Surganya para pencinta ayam!<span><br />Rasakan kepuasan dari setiap gigitan daging pilihan kami yang dipanggang
                sempurna, disajikan dengan saus khas dan pelengkap yang menggugah selera.</span></p>
            <TwinsButton />
        </div>
    )
}

export default ContentLeft;