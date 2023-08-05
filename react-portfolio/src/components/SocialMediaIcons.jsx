const SocialMediaIcons = () =>{
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a className="hover:opacity-50 transition duration-500"
            href="https://www.linkedin.com/in/adibkhan8180"
            target="_blank"
            rel="noreferrer">
                <img alt="linkedin-link" src="../assets/linkedin.png"/>
            </a>
            <a className="hover:opacity-50 transition duration-500"
            href="https://github.com/adibkhan8180"
            target="_blank"
            rel="noreferrer">
                <img alt="github-link" src="../assets/github.png" width="30px"/>
            </a>
            <a className="hover:opacity-50 transition duration-500"
            href="https://www.facebook.com/profile.php?id=100013529269189"
            target="_blank"
            rel="noreferrer">
                <img alt="facebook-link" src="../assets/facebook.png"/>
            </a>
            <a className="hover:opacity-50 transition duration-500"
            href="https://instagram.com/adeeb._._._._?igshid=ZDc4ODBmNjlmNQ=="
            target="_blank"
            rel="noreferrer">
                <img alt="instagram-link" src="../assets/instagram.png"/>
            </a>
            <a className="hover:opacity-50 transition duration-500"
            href="https://twitter.com/AdibKhan8180"
            target="_blank"
            rel="noreferrer">
                <img alt="instagram-link" src="../assets/twitter.png"/>
            </a>
        </div>
    )
};

export default SocialMediaIcons;