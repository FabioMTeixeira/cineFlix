import './style.css';
import Logo from '../../assets/logo.svg';

function Footer() {
    return (
        <footer>
            <div className='footer-left'>
                <img src={Logo} alt="logo" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptate in rerum sequi, soluta neque temporibus, blanditiis tempora quibusdam quis dolore autem necessitatibus quidem tempore recusandae qui commodi hic dicta?</p>
            </div>

            <div className='footer-right'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptate in rerum sequi, soluta neque temporibus, blanditiis tempora quibusdam quis dolore autem necessitatibus quidem tempore recusandae qui commodi hic dicta?</p>
            </div>
        </footer>
    );
}

export default Footer;