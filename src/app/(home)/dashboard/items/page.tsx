import GroceryCard from '@/components/items/GroceryCard'
import React from 'react'

const itemsList = [
  {
  name:"Saffola Total Refined Cooking Rice Bran & Safflower Blended Oil Can (Mix tel)  (5 L)",
  imgUrl:"/item/items 1.webp",
  originalPrice:120,
  discounted:20,
  quentity:"1 L",
  storeName:"Bhanu Singh Store",
  inStock:true
},
{
  name:"EMAMI Healthy & Tasty Kachchi Ghani Mustard Oil Pouch (Sarson Tel)  (1 L)",
  imgUrl:"/item/items 2.webp",
  originalPrice:155,
  discounted:23,
  quentity:"1 L",
  storeName:"Bhanu Singh Store",
  inStock:true
},
{
  name:"PARLE Hide & Seek Milano Cookies Biscotti  (150 g)",
  imgUrl:"/item/items 3.webp",
  originalPrice:120,
  discounted:25,
  quentity:"250 gm",
  storeName:"Bhanu Singh Store",
  inStock:false
},
{
  name:"Saffola Total Refined Cooking Rice Bran & Safflower Blended Oil Can (Mix tel)  (5 L)",
  imgUrl:"/item/items 1.webp",
  originalPrice:120,
  discounted:20,
  quentity:"1 L",
  storeName:"Bhanu Singh Store",
  inStock:false
},
{
  name:"EMAMI Healthy & Tasty Kachchi Ghani Mustard Oil Pouch (Sarson Tel)  (1 L)",
  imgUrl:"/item/items 2.webp",
  originalPrice:155,
  discounted:23,
  quentity:"1 L",
  storeName:"Bhanu Singh Store",
  inStock:true
},
{
  name:"PARLE Hide & Seek Milano Cookies Biscotti  (150 g)",
  imgUrl:"/item/items 3.webp",
  originalPrice:120,
  discounted:25,
  quentity:"250 gm",
  storeName:"Bhanu Singh Store",
  inStock:false
},
{
  name:"Saffola Total Refined Cooking Rice Bran & Safflower Blended Oil Can (Mix tel)  (5 L)",
  imgUrl:"/item/items 1.webp",
  originalPrice:120,
  discounted:20,
  quentity:"1 L",
  storeName:"Bhanu Singh Store",
  inStock:true
},
{
  name:"EMAMI Healthy & Tasty Kachchi Ghani Mustard Oil Pouch (Sarson Tel)  (1 L)",
  imgUrl:"/item/items 2.webp",
  originalPrice:155,
  discounted:23,
  quentity:"1 L",
  storeName:"Bhanu Singh Store",
  inStock:true
},
{
  name:"PARLE Hide & Seek Milano Cookies Biscotti  (150 g)",
  imgUrl:"/item/items 3.webp",
  originalPrice:120,
  discounted:25,
  quentity:"250 gm",
  storeName:"Bhanu Singh Store",
  inStock:true
},
{
  name:"Saffola Total Refined Cooking Rice Bran & Safflower Blended Oil Can (Mix tel)  (5 L)",
  imgUrl:"/item/items 1.webp",
  originalPrice:120,
  discounted:20,
  quentity:"1 L",
  storeName:"Bhanu Singh Store",
  inStock:true
},
{
  name:"EMAMI Healthy & Tasty Kachchi Ghani Mustard Oil Pouch (Sarson Tel)  (1 L)",
  imgUrl:"/item/items 2.webp",
  originalPrice:155,
  discounted:23,
  quentity:"1 L",
  storeName:"Bhanu Singh Store",
  inStock:false
},
{
  name:"PARLE Hide & Seek Milano Cookies Biscotti  (150 g)",
  imgUrl:"/item/items 3.webp",
  originalPrice:120,
  discounted:25,
  quentity:"250 gm",
  storeName:"Bhanu Singh Store",
  inStock:true
},
{
  name:"Saffola Total Refined Cooking Rice Bran & Safflower Blended Oil Can (Mix tel)  (5 L)",
  imgUrl:"/item/items 1.webp",
  originalPrice:120,
  discounted:20,
  quentity:"1 L",
  storeName:"Bhanu Singh Store",
  inStock:true
},
{
  name:"EMAMI Healthy & Tasty Kachchi Ghani Mustard Oil Pouch (Sarson Tel)  (1 L)",
  imgUrl:"/item/items 2.webp",
  originalPrice:155,
  discounted:23,
  quentity:"1 L",
  storeName:"Bhanu Singh Store",
  inStock:true
},
{
  name:"PARLE Hide & Seek Milano Cookies Biscotti  (150 g)",
  imgUrl:"/item/items 3.webp",
  originalPrice:120,
  discounted:25,
  quentity:"250 gm",
  storeName:"Bhanu Singh Store",
  inStock:false
},
]

const DashboardItems = () => {
  return (
    <div className='mt-16 px-6  overflow-y-scroll mx-auto max-sm:px-6 w-full'>

        <h1 className='text-[1.75rem] font-semibold text-white'>
          udhari.com 
        <span className='text-green-500'> Grocery</span>
        </h1>

        <div className='flex flex-wrap gap-8 w-full my-4 '>
              {
                itemsList.map((items,index) => (
                    <GroceryCard
                    key={index}
                    name={items.name}
                    imgUrl={items.imgUrl}
                    originalPrice={items.originalPrice}
                    discount={items.discounted}
                    quentity={items.quentity}
                    storeName={items.storeName}
                    inStock={items.inStock}
                    />
                ))
              }
        </div>
    </div>
  )
}

export default DashboardItems