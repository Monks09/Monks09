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
                <img style={{ borderRadius: "50%", height: "300px" }} src="https://drive.google.com/file/d/1d4hIZ8leShfXoeG0AXaLrNh6l9pikBU0/view?usp=share_link" alt="avatar-img" />
            </div>

        </div>
    );
}

export default UserProfile;