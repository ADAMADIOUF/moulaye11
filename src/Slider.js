import React,{useState,useEffect} from 'react'
import { FaChevronRight,FaChevronLeft } from 'react-icons/fa'
import slide from './dataSlide'
export default function Slider() {
 const[personSlide,setPersonSlide]= useState(slide)
 const[indexSlide,setIndexSlide]= useState(0)
 useEffect(()=>{
  const sliderWork = personSlide.length - 1
  if(indexSlide < 0){
   setIndexSlide(sliderWork)
  }
  if(indexSlide > sliderWork){
   setIndexSlide(0)
  }
 },[indexSlide,personSlide])

 useEffect(()=>{
  let sliderInterval = setInterval(()=>{
   setIndexSlide(indexSlide + 1)
  },3000)
  return() =>{
   clearInterval(((sliderInterval)))
  }
 },[indexSlide])
  return (
    <section className='slide'>
      {personSlide.map((person, setPerson) => {
        const { id, name, img, title, date } = person;

        let mainSlide = 'nextSlide';
        if(setPerson === indexSlide){
        mainSlide = 'activeSlide';
        }
        if(setPerson === indexSlide - 1 ||(indexSlide === 0 && indexSlide === personSlide.length - 1)){
         mainSlide= "mainSlide"
        }
        return (
          <div className='slider' key={id}>
            <abbr className={mainSlide}>
              <img src={img} alt='' className='img-slide' />
              <div className='slide-info'>
                <h3>{name}</h3>
                <h2>{title}</h2>
                <p>{date}</p>
              </div>
            </abbr>
          </div>
        );
      })}
      <button className='btn-prev' onClick={()=>setIndexSlide(indexSlide -1)}>
        <FaChevronLeft />
      </button>
      <button className='btn-next' onClick={()=> setIndexSlide(indexSlide +1)}>
        <FaChevronRight />
      </button>
    </section>
  );
}
