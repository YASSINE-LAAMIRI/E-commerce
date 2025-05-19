import { Carousel } from 'react-bootstrap'
import React from 'react'

const Carrosel = () => {
  return (
    <div>

          <Carousel data-bs-theme="dark">
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img
          className="d-block w-60"
          src="https://www.exist.com.tn/modules/tm_imageslider/views/img/1b0a05333712378aa72f391674d4ad2e55195c7e_Banni%C3%A8re-Site.jpg"
          alt="First slide"
          width={"100%"}
          height={"100%"}
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
       <img
         // className="d-block w-60"
          src="https://www.exist.com.tn/modules/tm_imageslider/views/img/4c92dabcf786ce37a794954656b449e09a6d1919_Banni%C3%A8re.jpg"
          alt="First slide"
          width={"100%"}
           height={"100%"}
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
       <img
         // className="d-block w-60"
          src="https://www.exist.com.tn/modules/tm_imageslider/views/img/cdd412fbf34339e5a71289f2084e6a8ed243c362_Banni%C3%A9re%20(2---).jpg"
          alt="First slide"
          width={"100%"}
           height={"100%"}
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



    </div>
  )
}

export default Carrosel