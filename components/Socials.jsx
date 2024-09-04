import Link from "next/link"
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";


const Social = [

    {icon: <FaGithubSquare />, path: 'https://github.com/Mukesh12Roy'},
    {icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/mukesh-roy-a64a01238/'},
    
]

const Socials = ({containerStyles, iconStyles}) => {

  return (
    <div className= {containerStyles}>
        {Social.map((item, index) => {
            return (
                <Link key = {index} href = {item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            );

        })}
    </div>
  );
};

export default Socials
