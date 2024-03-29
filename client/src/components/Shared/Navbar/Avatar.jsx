import { useContext } from 'react';
import avatar from '../../../assets/images/placeholder.jpg';
import { AuthContext } from '../../../providers/AuthProvider';

const Avatar = () => {
    const { user } =useContext(AuthContext)
    return (
        <img src={user && user.photoURL ? user.photoURL : avatar} alt="profile" className='rounded-full w-8 h-8' width='30' height='30' />
    );
};

export default Avatar;