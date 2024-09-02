import './card.css'
import profilePic from './assets/profilePic.jpeg';
function Card(){
    return(
        <> 
        {/* <div className="bar"> */}

        <div className="card">
        <img className="profileImage" src={profilePic} alt="Profile Picture" />
        
        </div>
        <div className="info">
            <p>There are few issues that we need to fix</p>

        </div>
        {/* </div> */}
        </>
    );
}
export default Card