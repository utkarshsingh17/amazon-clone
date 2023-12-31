import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import{Link} from 'react-router-dom';
import {useStateValue} from './StateProvider';

function Header() {
    const[{basket},dispatch]=useStateValue();
  return (
    <div className='header'>
        <Link to="/">
        <img className='header_logo'
        src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg"/>
        </Link>
        

        <div className="header_search">
            <input className="header_search_Input" type="text"/>
            <SearchIcon className="header_searchIcon"/>
            
         </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className='header_optionLineOne'>
                        Hello Guest
                        </span>
                    <span className='header_optionLineTwo'>
                        Sign in</span>

                </div>
                <div className="header_option">
                <span className='header_optionLineOne'>
                        Returns
                        </span>
                    <span className='header_optionLineTwo'>
                        & Orders</span>

                </div>
                <div className="header_option">
                <span className='header_optionLineOne'>
                        Your</span>
                        
                    <span className='header_optionLineTwo'>
                        Prime</span>

                </div>

            </div>
            <Link to="/checkout">
            <div className="header_optionBasket">
            <ShoppingBasketIcon/>
            <span className="header_optionLineTwo 
            header_basketCount">{basket?.length}</span>
            </div>

            </Link>
          

    </div>
     
  )
}

export default Header