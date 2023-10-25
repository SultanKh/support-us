import DonationItem from '../donation-item/DonationItem';
import './Donations.scss'
import img1 from '../../assets/loneIsrael.jpg'
import img2 from '../../assets/loneSoldiers.jpg'
import img3 from '../../assets/loni.jpg'
import img4 from '../../assets/standWithIsr.jpg'
import img5 from '../../assets/angerattack.jpg'
import img6 from '../../assets/angerattack.jpg'
function Donations() {
    const onClickHandler = () => {
        window.location.href = "https://buy.stripe.com/test_9AQaFobdteRVdPO6oo";
    }
    return <div className="Donations">
        <div className="donation-item" >
            <DonationItem title='10' description='for extra food' img={img1} buttonText='Donate Now' onClickHandler={onClickHandler} />
        </div>
        <div className="donation-item">
            <DonationItem title='15' description='for army needs' img={img2} buttonText='Donate Now' onClickHandler={onClickHandler}/>
        </div>
        <div className="donation-item">
            <DonationItem title='20' description='well being of our Soldier' img={img3} buttonText='Donate Now' onClickHandler={onClickHandler}/>
        </div>
        <div className="donation-item">
            <DonationItem title='25' description='Appreciated' img={img4} buttonText='Donate Now' onClickHandler={onClickHandler}/>
        </div>
        {/* <div className="donation-item item-span-2">
                <DonationItem title='Support Cyber Attack Now' onClickHandler={() => {}} img={img5} buttonText='Join Now'/>
            </div> */}

    </div>
}

export default Donations;