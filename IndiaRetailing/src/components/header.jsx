import bannerImage from "/src/assets/image.png"
import logo from "/src/assets/logo.png"


const header=()=>
    {
        return(
            <div className="header">
                <div className="banner">
                    <img className="bannerImage" src={bannerImage} alt="BannerImage" />
                </div>
                <div className="title">
                    <input className="searchBar" type="text" placeholder="Search here..." name="" id="" />
                    <img className="logo" src={logo} alt="logo" />
                    <div className="buttons">
                    <input type="button" value="SUBSCRIBE" />
                    <input type="button" value="SIGN IN" />
                    </div>
                </div>
                <hr />
                <nav>
                    <img src="" alt="menuIcon" />
                    <div className="nav">
                        <div className="home">Home</div>
                        <div>Categories</div>
                        <div>IR Prime</div>
                        <div>Events</div>
                        <div>Bookstore</div>
                        <div>Newsletter</div>
                        <div>Video</div>
                    </div>
                    <div className="date">
                        Friday, 30 June 2023
                    </div>
                </nav>
                <div className="topics">
                    <div>Fashion & Lifestyle</div>
                    <div>Beauty & Wellness</div>
                    <div>Food & Beverage</div>
                    <div>Consumer Durables & IT</div>
                    <div>Entertainment</div>
                    <div>Home Decor & Furnishing</div>
                    <div>Specialty Retail</div>
                </div>
            </div>
        )
    }
export default header