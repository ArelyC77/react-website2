import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import imagess from '../images/img-9.jpg';
function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Epic destinations</h1>
      <div className='cards__container'>
        <div className='cards_wrapper'>
            <ul className='cards__items'>
               <CardItem 
               src={require('../images/img-9.jpg')}
              //  ^ Had to change this code from video bc it would only show alt
               text="Explore the hidden waterfall deep inside the Amazon Jungle"
               label="Adventure"
               path="/services"
               />
               <CardItem 
               src={require('../images/img-2.jpg')}
              //  ^ Had to change this code from video bc it would only show alt
               text="Travel through the island of Bali in a private Cruise"
               label="Luxury"
               path="/services"
               />
            </ul>
            <ul className='cards__items'>
               <CardItem 
               src={require('../images/img-3.jpg')}
              //  ^ Had to change this code from video bc it would only show alt
               text="Set sail through the islands of the Carribean!"
               label="Mystery"
               path="/services"
               />
               <CardItem 
               src={require('../images/img-4.jpg')}
              //  ^ Had to change this code from video bc it would only show alt
               text="Experience soccer on a deserted island"
               label="Adventure"
               path="/products"
               />
               <CardItem 
               src={require('../images/img-8.jpg')}
              //  ^ Had to change this code from video bc it would only show alt
               text="Ride a camel through the Sahara Dessert"
               label="Adrenaline"
               path="/sign-up"
               />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
