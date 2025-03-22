
import secImage from '/src/assets/sec1.png'

const section1 =()=>
    {
        return(
            <div className="section1">
                <div className='subSec1'>
                <div><img className='sec1Image' src={secImage} alt="img" /></div>
                <div>
                    <div className='hot'>Hotspots</div>
                    <div>Luxury hotsports: 5 most expensive high streets in the..</div>
                </div>
                </div>
                <div className='subSec1'>
                <div><img className='sec1Image' src={secImage} alt="img" /></div>
                <div>
                    <div className='hot'>Hotspots</div>
                    <div>Luxury hotsports: 5 most expensive high streets in the..</div>
                </div>
                </div>
                <div className='subSec1'>
                <div><img className='sec1Image' src={secImage} alt="img" /></div>
                <div>
                    <div className='hot'>Hotspots</div>
                    <div>Luxury hotsports: 5 most expensive high streets in the..</div>
                </div>
                </div>
            </div>
        )
    }
    export default section1