import React from 'react';
import '../styles/HeaderOptions.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { Avatar } from '@material-ui/core';

function HeaderOption({ avatar, Icon, title, onClick }) {

    const user = useSelector(selectUser);    
    return (
        <div onClick={onClick} className='headerOption'>
            {Icon && <Icon className='headerOption_icon' />}
            {avatar && (
                <Avatar className='headerOption__icon'>{user?.email[0]}</Avatar>
            )
                }
            <h3 className="headerOption_title">{title}</h3>
        </div>
    )
}

export default HeaderOption
