import React from 'react';

import pix from '../assets/Acetylcysteine1hd23D.jpg';

function FirstReact() {
    return ( 
        <div className='body'>
            <header className='header'>
                <h1>Rotata Rojama</h1>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Biography</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul> 
                </nav>
                <div className='Ejo'></div>
            </header>
            <section className='Agbe'>
            <div className='Image-div'>
                    <img src={pix} alt="rotimi shaking his enemies"/>
                </div>
                <p>Rotimi is a kingpin in a very dope business of chess in which he trades his bishops and knights for the opponents own anjd try to checkmate the enemy by giving them zanku</p>
            </section>
            <section>
                <h3>Biography</h3>
                <div className='dab'>
                <div className='three-cl'>zapskpdhdbd vhdjbdkjnhdkijnds kjdshdshjhdd bjdkbdfbkjdfkhfd njkfdbkfdknfdknfdkn jdfkbdfkjdfknfdkdfnk kfnkfdfdknfdkfd hgfdhyfyhgjug</div>
                <div className='three-cl'>zapskpdhdbd vhdjbdkjnhdkijnds kjdshdshjhdd bjdkbdfbkjdfkhfd njkfdbkfdknfdknfdkn jdfkbdfkjdfknfdkdfnk kfnkfdfdknfdkfd hgfdhyfyhgjug</div>
                <div className='three-cl'>zapskpdhdbd vhdjbdkjnhdkijnds kjdshdshjhdd bjdkbdfbkjdfkhfd njkfdbkfdknfdknfdkn jdfkbdfkjdfknfdkdfnk kfnkfdfdknfdkfd hgfdhyfyhgjug</div>
                </div>
                </section>
            <section>
                <h3>Contact Us</h3>
            </section>
            <footer>
                Copyright Reserved
            </footer>
        </div>
     );
}

export default FirstReact;