import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
    <div className='home_container'>
    <img  className="home_image" src="https://www.justwatch.com/images/backdrop/302212233/s1440/attack-on-titan.webp" alt=""/>
    <div className="home_row">
      <Product title="Hell's Paradise"
       price={20.99}
       image="https://c4.wallpaperflare.com/wallpaper/323/472/931/hell-s-paradise-jigokuraku-anime-boys-anime-girls-hd-wallpaper-preview.jpg"
       rating={5}
       />
       <Product title="Demon Slayer"
       price={20.99}
       image="https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg"
       rating={5}
       />

    </div>
    
    <div className="home_row">
    <Product title="Attack On Titan"
       price={50.99}
       image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZqMae0-B0CaRZT6tiqllGrvJ4pjuKgfoOpVif_xZTlcXi9-I_hQNwAo-BK9rGr83Sksg&usqp=CAU"
       rating={5}
       />
       <Product title="Death Note"
       price={60.99}
       image="https://m.media-amazon.com/images/I/716ASj7z2GL._AC_UF1000,1000_QL80_.jpg"
       rating={5}
       />
       <Product title="Dragon Ball"
       price={80.99}
       image="https://cdn.vox-cdn.com/thumbor/dAATSMRpBqCEtmPwSe_A0IGzkBg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13679539/FunFilms_DBSBroly_Landing.jpg"
       rating={5}
       />
    
    
    </div>

    <div className="home_row">

    <Product title="Naruto"
       price={99.99}
       image="https://wallpapers.com/images/featured/1mxaylnezr64ymf6.jpg"
       rating={5}
       />
    
    </div>

    </div>
    </div>
  )
}

export default Home