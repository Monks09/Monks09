import Button from "../Button/Button";
import "./UserProfile.css";

function UserProfile() {
    return (
        <div className="UserProfile">
            <div>
                <h1>Hi, I am Mayank Sharma.</h1>
                <p>I am Full Stack Web Developer and I have knowledge in HTML, CSS, JS, REACT and I make user-friendly websites.</p>
                <Button text="Download Resume" />
            </div>
            <div>
                <img style={{ borderRadius: "50%", height: "300px" }} src="https://eddie-hernandez.com/wp-content/uploads/2021/08/Commercial-Real-Estate-Headshot-1026.jpg" alt="avatar-img" />
            </div>

        </div>
    );
}

export default UserProfile;