import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

const Logo = () => {
    return <Link to='/'>
    <img src={logo} alt="" width='100' height='100' className='hidden md:block' />
    </Link>
};

export default Logo;