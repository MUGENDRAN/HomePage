
import rahul from '/src/assets/rahul.png'
import secImage from '/src/assets/sec1.png'
import shop from '/src/assets/shop.png'


const section2 = () => {
    return (
        <div className="section2">
            <div className="section21">
                <div className='parent'>
                    <img className='rahul' src={rahul} alt="img" />

                    <div className='overlay'>
                        <div className='inFocus'>IN FOCUS</div>
                        <div>
                            Rahul Gandhi In Manipur: Chopper Ride After Women <br /> Protesters Surround Car
                        </div>
                        <div>Rahul Gandhi</div>
                    </div>
                </div>

                <div className='subSec1'>
                    <div><img className='sec1Image' src={secImage} alt="img" /></div>
                    <div>
                        <div className='hot'>Hotspots</div>
                        <div>Luxury hotsports: 5 most expensive high streets in the..</div>
                    </div>
                </div>
                <hr />
                <div className='subSec1'>
                    <div><img className='sec1Image' src={secImage} alt="img" /></div>
                    <div>
                        <div className='hot'>Hotspots</div>
                        <div>Luxury hotsports: 5 most expensive high streets in the..</div>
                    </div>
                </div>
                <hr />
                <div className='subSec1'>
                    <div><img className='sec1Image' src={secImage} alt="img" /></div>
                    <div>
                        <div className='hot'>Hotspots</div>
                        <div>Luxury hotsports: 5 most expensive high streets in the..</div>
                    </div>
                </div>
                
            </div>

            <div className="section22">
            <div>Latest News</div>
            <div><img className='shop' src={shop} alt="shop" /></div>
            <div>Unwrapping the Archies’ reinvention plan</div>
            <div><img className='shop' src={shop} alt="shop" /></div>
            <div>Unwrapping the Archies’ reinvention plan</div>
            <hr />
            <div className='para'><b>Croma opens 58 outlets in 6, Croma retails more than 16,000</b> <br />
            These companies created a lot of hype when they listed on the...</div>
            <hr />
            <div className='para'><b>Croma opens 58 outlets in 6, Croma retails more than 16,000</b> <br />
            These companies created a lot of hype when they listed on the...</div>
            </div>

        </div>
    )
}
export default section2