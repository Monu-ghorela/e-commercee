import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

export default function CatFilters() {

  const [images, setImages] = useState([]);
  useEffect(() => {
    getproduct();
  }, []
  )

  const getproduct = async () => {
    let result = await fetch('http://localhost:5000/ImageFetch')
    result = await result.json();
    setImages(result)
    console.log(result)

  }
  const menuItem = [{
    nameA: "CATEGORY",
    nameB: "BRAND",


  }]
  return (<>
    <div>
      <div className='Cat_filters'>
        <h1>FILTER BY </h1>

        <div>{menuItem.map((item, index) => (
          <>
            <div><h3>{item.nameA}</h3>
              <div className=' Category'>
                <div className='category1'>

                  Men <input className="" type="checkbox" placeholder="Search Products Here" />

                </div>
                <br />
                <div className='category2'>

                  WoMen <input className="" type="checkbox" placeholder="Search Products Here" />
                </div>
              </div>

            </div>
            <div>
              <h3>{item.nameB}</h3>
              <div className=' BRAND'>
                <div className='Brand'>

                  Men <input className="" type="checkbox" placeholder="Search Products Here" />

                </div>
                <br />
                <div className='Brand'>

                  WoMen <input className="" type="checkbox" placeholder="Search Products Here" />
                </div>
              </div>
            </div>
          </>
        ))}</div>
      </div>
      <div className='Products_body'>

        {
          images.map((item, index) => {
            const image = item.image.data.data;
            console.log(image)
            const base64String = btoa(
              String.fromCharCode(...new Uint8Array(image))
            );
            return (
              <>
                <div className='block_image'>
                  <img className='category_Images' src={`data:image/png;base64,${base64String}`} alt="no found" width={70} />

                  <h6 className='detail_images'>{item.name}</h6 >

                </div>
              </>
            )

          }

          )

        }
      </div>
    </div>

  </>
  )
}