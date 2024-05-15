import { useState } from "react";

const ContentLeft = () => {
    const [isNgentakClicked, setIsNgentakClicked] = useState(true);
    const [isNakulaClicked, setIsNakulaClicked] = useState(false);
    const mapList = {
        ngentak: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.2356741589647!2d110.50647677371711!3d-7.327405792680886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a7903b94e3961%3A0x2f4ac9444cc49c55!2sChikito.id!5e0!3m2!1sen!2sus!4v1715693389600!5m2!1sen!2sus",
        nakula: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.1503916082356!2d110.48516357371719!3d-7.337002092671511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a79695e469c8d%3A0xe867910f33827c65!2sChikito.id%20Cabang%20Kembangarum!5e0!3m2!1sen!2sus!4v1715696975542!5m2!1sen!2sus"
    }

    const toggleNgentakButton = () => {
        isNgentakClicked ? setIsNgentakClicked(true) : setIsNgentakClicked(true);
        setIsNakulaClicked(false);
    }

    const toggleNakulaButton = () => {
        isNakulaClicked ? setIsNakulaClicked(true) : setIsNakulaClicked(true);
        setIsNgentakClicked(false);
    }

    return (
        <div className='content-left-location'>
            <h1 className='text-title'>LOCATION</h1>
            <h2 className='text-highlight'>We have 2 restaurant locations</h2>
            <p className='text-description-people-review'>Temukan kami di lokasi yang strategis dan mudah dijangkau. Kunjungi kami dan nikmati pengalaman kuliner yang memuaskan!</p>
            <iframe src={isNgentakClicked ? mapList.ngentak : mapList.nakula} width="100%" height="200"></iframe>
            <div className="button-map-layout">
                <h1 className={isNgentakClicked ? "menu-button-clicked" : "menu-button-noclicked"} onClick={toggleNgentakButton}>Ngentak</h1>
                <h1 className={isNakulaClicked ? "menu-button-clicked" : "menu-button-noclicked"} onClick={toggleNakulaButton}>Nakula Sadewa</h1>
            </div>
        </div>
    )
}

export default ContentLeft;