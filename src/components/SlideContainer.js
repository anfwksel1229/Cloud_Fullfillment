import React from 'react'
import gsap from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/react'
import Container01 from './Main/ScrollContainer/Container01'
import Container02 from './Main/ScrollContainer/Container02'
import Container03 from './Main/ScrollContainer/Container03'
import Container04 from './Main/ScrollContainer/Container04'
import Container05 from './Main/ScrollContainer/Container05'
import Container06 from './Main/ScrollContainer/Container06'
import Container07 from './Main/ScrollContainer/Container07'
import Container08 from './Main/ScrollContainer/Container08'
import Container09 from './Main/ScrollContainer/Container09'
// import Footer from '../components/Footer'
// import Footer from './Footer'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import '../assets/css/Container/Main/SwiperContainer.css'

// import required modules
import { Mousewheel } from 'swiper/modules'

function SlideContainer() {
  const handleSlideChange = (swiper) => {
    const activeIndex = swiper.activeIndex // Get the active index

    if (activeIndex === 1) {
      // Assuming Container02 is the second slide
      const subTitle = document.querySelector('.Container_02-01')
      const mainTitle = document.querySelector('.Container_02-02')
      const cycle = document.querySelector('.Container_02-03')
      gsap.set([subTitle, mainTitle, cycle], { y: 50, opacity: 0 })
      const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } })
      tl.to(subTitle, { y: 0, opacity: 1, duration: 1 })
      tl.to(mainTitle, { y: 0, opacity: 1, duration: 1.5 }, '-=0.5')
      tl.to(cycle, { y: 0, opacity: 1, duration: 1 }, '-=1')
    } else if (activeIndex === 2) {
      // Assuming Container03 is the second slide
      const subTitle = document.querySelector('.Container_03-01')
      const mainTitle = document.querySelector('.Container_03-02')
      gsap.set([subTitle, mainTitle], { y: 50, opacity: 0 })
      const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } })
      tl.to(subTitle, { y: 0, opacity: 1, duration: 1 })
      tl.to(mainTitle, { y: 0, opacity: 1, duration: 1.5 }, '-=0.5')
    } else if (activeIndex === 3) {
      // Assuming Container04 is the second slide
      const subTitle = document.querySelector('.Container_04-01')
      const mainTitle = document.querySelector('.Container_04-02')
      gsap.set([subTitle, mainTitle], { y: 50, opacity: 0 })
      const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } })
      tl.to(subTitle, { y: 0, opacity: 1, duration: 1 })
      tl.to(mainTitle, { y: 0, opacity: 1, duration: 1.5 }, '-=0.5')
    } else if (activeIndex === 4) {
      // Assuming Container05 is the second slide
      const subTitle = document.querySelector('.Container_05-01')
      const mainTitle = document.querySelector('.Container_05-02')
      gsap.set([subTitle, mainTitle], { y: 50, opacity: 0 })
      const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } })
      tl.to(subTitle, { y: 0, opacity: 1, duration: 1 })
      tl.to(mainTitle, { y: 0, opacity: 1, duration: 1 }, '-=0.5')
    } else if (activeIndex === 5) {
      // Assuming Container06 is the second slide
      const subTitle = document.querySelector('.Container_06-01')
      // const mainTitle = document.querySelector('.Container_06-02')
      const cycle = document.querySelector('.Container_06-03')
      gsap.set([subTitle, cycle], { y: 50, opacity: 0 })
      const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } })
      tl.to(subTitle, { y: 0, opacity: 1, duration: 1 })
      // tl.to(mainTitle, { y: 0, opacity: 1, duration: 1 }, '-=0.5')
      tl.to(cycle, { y: 0, opacity: 1, duration: 1 })
    } else if (activeIndex === 6) {
      // Assuming Container07 is the second slide
      const subTitle = document.querySelector('.Container_07-01')
      const mainTitle = document.querySelector('.Container_07-02')
      const cycle = document.querySelector('.Container_07-03')
      gsap.set([subTitle, mainTitle], { y: 50, opacity: 0 })
      gsap.set(cycle, { y: 0 })
      const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } })
      tl.to(subTitle, { y: 0, opacity: 1, duration: 1 })
      tl.to(mainTitle, { y: 0, opacity: 1, duration: 1.5 }, '-=0.5')
      tl.to(cycle, { y: -80, duration: 1 }, '-=1')
    } else if (activeIndex === 7) {
      // Assuming Container08 is the second slide
      const subTitle = document.querySelector('.Container_08-01')
      const mainTitle = document.querySelector('.Container_08-02')
      gsap.set([subTitle, mainTitle], { y: 50, opacity: 0 })
      const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } })
      tl.to(subTitle, { y: 0, opacity: 1, duration: 1 })
      tl.to(mainTitle, { y: 0, opacity: 1, duration: 1.5 }, '-=0.5')

      const truckImage = document.querySelector('.truck-image')
      if (window.innerWidth <= 361) {
        console.log('361')
        gsap.set(truckImage, { x: '100%', y: '430%' })
      } else if (window.innerWidth <= 376) {
        console.log('376')
        gsap.set(truckImage, { x: '100%', y: '375%' })
      } else if (window.innerWidth <= 391) {
        console.log('391')
        gsap.set(truckImage, { x: '100%', y: '490%' })
      } else if (window.innerWidth <= 413) {
        console.log('413')
        gsap.set(truckImage, { x: '100%', y: '545%' })
      } else if (window.innerWidth <= 416) {
        console.log('416')
        gsap.set(truckImage, { x: '100%', y: '419%' }) // Set initial position for smaller screens
      } else if (window.innerWidth <= 769) {
        console.log('769')
        gsap.set(truckImage, { x: '100%', y: '500%' }) // Set initial position for smaller screens
      } else if (window.innerWidth <= 991) {
        gsap.set(truckImage, { x: '86%', y: '100%' })
      } else {
        gsap.set(truckImage, { x: '125%', y: '104%' })
      }

      const t2 = gsap.timeline({ defaults: { ease: 'power3.inOut' } }) // Repeat the animation indefinitely

      // 갤럭시 S8+
      if (window.innerWidth <= 361) {
        t2.to(truckImage, {
          x: '-100%',
          y: '280%',
          duration: 3,
        })
        // 아이폰 6/7/8
      } else if (window.innerWidth <= 376) {
        t2.to(truckImage, {
          x: '-100%',
          y: '225%',
          duration: 3,
        })
        // 아이폰 13
      } else if (window.innerWidth <= 391) {
        t2.to(truckImage, {
          x: '-100%',
          y: '349%',
          duration: 3,
        })
        // 갤럭시 S20 울트
      } else if (window.innerWidth <= 413) {
        t2.to(truckImage, {
          x: '-100%',
          y: '394%',
          duration: 3,
        })
      } else if (window.innerWidth <= 416) {
        t2.to(truckImage, {
          x: '-100%',
          y: '267%',
          duration: 3,
        })
      } else {
        t2.to(truckImage, {
          x: '-137%',
          y: '-94%',
          duration: 3,
        })
      }
    } else if (activeIndex === 8) {
      // Assuming Container09 is the second slide
      const subTitle = document.querySelector('.Container_09-01')
      const mainTitle = document.querySelector('.Container_09-02')

      if (window.innerWidth <= 769) {
        gsap.set(subTitle, { x: -200, y: 130, opacity: 0 })
      } else {
        gsap.set(subTitle, { x: -200, y: 0, opacity: 0 })
      }
      gsap.set(mainTitle, { y: 50, opacity: 0 })

      const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } })

      if (window.innerWidth <= 769) {
        tl.to(mainTitle, { y: 0, opacity: 1, duration: 1 })
        tl.to(subTitle, { x: 100, y: 135, opacity: 1, duration: 1 })
      } else {
        tl.to(mainTitle, { y: 0, opacity: 1, duration: 1 })
        tl.to(subTitle, { x: 100, opacity: 1, duration: 1 })
      }
    }
  }
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={{
          releaseOnEdges: true, // This allows scrolling to continue when reaching the edge of the slides
        }}
        modules={[Mousewheel]}
        onActiveIndexChange={handleSlideChange}
        className="mySwiper"
      >
        <SwiperSlide>
          <Container01 />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: '#080f2a' }}>
          <Container02 />
        </SwiperSlide>
        <SwiperSlide
          style={{ background: 'linear-gradient(to bottom, #202E5E, #060C22)' }}
        >
          <Container03 />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: '#060C22' }}>
          <Container04 />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: '#171F40' }}>
          <Container05 />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: '#080F2B' }}>
          <Container06 />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: '#171F40' }}>
          <Container07 />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: '#101836' }}>
          <Container08 />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: '#080F2B' }}>
          <Container09 />
        </SwiperSlide>
        {/* <SwiperSlide>
          <Footer />
        </SwiperSlide> */}
      </Swiper>
    </>
  )
}

export default SlideContainer
