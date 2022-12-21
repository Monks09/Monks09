import './Contact.css';
import ContactCard from './ContactCard';

function Contact(props) {
    return <div className="Contact">
        <h1>Contact Me</h1>
        <div className="ContactCardsDiv">
            <ContactCard icon="fa-brands fa-linkedin" heading="LinkedIn" text="You can contact me on LinkedIn" link="#" link_text="mayank-sharma" />
            <ContactCard icon="fa-solid fa-phone" heading="Phone" text="Here is My Phone Number" link="#" link_text="+919875335104" />
            <ContactCard icon="fa-solid fa-envelope" heading="Email" text="You can Simply mail me just by clicking on my email" link="#" link_text="mayanksharma5104@gmail.com" />
            <ContactCard icon="fa-solid fa-location-dot" heading="Location" text="Kolkata, West Bengal" link="#" link_text="View on Google map" />
        </div>

    </div>
}

export default Contact;