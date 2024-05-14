import reviewer1 from '../../assets/ihwan.jpg'
import reviewer2 from '../../assets/selvi.jpg'
import reviewer3 from '../../assets/zackya.jpg'

const ContentRight = () => {

    const dataReviewer = [
        {
            imgReviewer: reviewer1,
            nameReviewer: "Ihwan Arifandi",
            contentReviewer: "Suasana enak, adem, ada kolam ikannya yang jernih dan ikannya besar. Sayangnya ga boleh mancing disitu.",
            starReviewer: 5
        },
        {
            imgReviewer: reviewer2,
            nameReviewer: "Selvia Tunjungsih",
            contentReviewer: "Rasa makanannya enak sekali saya suka, dan untuk harga menurut saya sangat worth it.",
            starReviewer: 4
        },
        {
            imgReviewer: reviewer3,
            nameReviewer: "Zackya Noor Habiba",
            contentReviewer: "Tempatnya agak masuk gang, mobil ngga bisa masuk jadi harus parkir agak jauh. tapi it's oke gaiss.",
            starReviewer: 3
        },
    ]

    return (
        <div className='content-right-people-review'>
            <div className='people-review-layout'>
                <div className='people-review-list'>
                    {dataReviewer.map((item) => (
                        <div className="box-review">
                            <div className='profil-review-layout'>
                                <img src={item.imgReviewer} alt="" />
                            </div>
                            <p>{item.contentReviewer}</p>
                            <h1>{item.nameReviewer}</h1>
                            <div className="text-yellow mb-25">
                                {[...Array(item.starReviewer)].map(() => (
                                    <i className='bx bxs-star'></i>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ContentRight;