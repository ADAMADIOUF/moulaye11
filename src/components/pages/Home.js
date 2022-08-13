import React from 'react'
import Slider from '../../Slider'
import { AiOutlineCheck } from 'react-icons/ai';



function Home() {
  return (
    <div>
      <Slider />
      <section className='section-center about'>
        <div className='about-details'>
          <div className='about-title'>
            <h3>about us</h3>
            <h4>Serving Since 1950</h4>
            <div className='about btn'></div>
            <div className='about-container'>
              <article>
                <h3>our history</h3>
                <p>
                  Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum
                  amet sed vero dolor sea
                </p>
                <p>
                  Takimata sed vero vero no sit sed, justo clita duo no duo amet
                  et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet
                  amet no. Est nonumy sed labore eirmod sit magna. Erat at est
                  justo sit ut. Labor diam sed ipsum et eirmod
                </p>
                <button className='btn-history'>learn more</button>
              </article>
              <article>
                <img src='image/about.png' alt='' className='img-about' />
              </article>
              <article>
                <h3>Our Vision</h3>
                <p>
                  Invidunt lorem justo sanctus clita. Erat lorem labore ea,
                  justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea
                  justo. Erat justo sed sed diam. Ea et erat ut sed diam sea
                  ipsum est dolor
                </p>
                <li>
                  <span>
                    <AiOutlineCheck />
                  </span>
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  <span>
                    <AiOutlineCheck />
                  </span>
                  Lorem ipsum dolor sit amet
                </li>
                <li>
                  <span>
                    <AiOutlineCheck />
                  </span>
                  Lorem ipsum dolor sit amet
                </li>
                <button className='btn-vision'>learn more</button>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home