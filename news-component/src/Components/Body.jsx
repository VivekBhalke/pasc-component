// import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "./Card";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { useEffect, useState } from "react";
const Body = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive : [{
      breakpoint: 800,
      settings:{
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  };
  const [data , setData] = useState([]);
  useEffect(()=>{
    fetch("https://inshortsapi.vercel.app/news?category=technology" , {
      method : 'GET',
      headers : {
        'Content-Type' : 'application/json'
      }
    }).then((response)=>{
      response.json().then((result)=>{
        console.log("we got the data")
        console.log(result.data);
        setData(result.data);
      })
    })
  },[])
  const dummydata = [
    {
      "author": "Pragya Swastik",
      "content": "Nokia on Monday said it made the world's first live immersive voice and audio call over a cellular network. The call made by Nokia CEO Pekka Lundmark was enabled by the new 3GPP Immersive Voice and Audio Services (IVAS) codec. The IVAS codec allows consumers to hear 3D spatial sound in real-time instead of today's monophonic smartphone voice call experience.",
      "date": "Monday, 10 June, 2024",
      "id": "f22743e7a7384807adbbba720bdcb82b",
      "imageUrl": "https://nis-gs.pix.in/inshorts/images/v1/variants/jpg/m/2024/06_jun/10_mon/img_1718015912704_101.jpg?",
      "readMoreUrl": "https://www.nokia.com/about-us/news/releases/2024/06/10/nokia-makes-worlds-first-immersive-voice-and-audio-call/?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
      "time": "04:34 pm",
      "title": "Nokia makes world's first 'immersive' phone call",
      "url": "https://shrts.in/5SjfL"
    },
    {
      "author": "Debaroti Adhikary",
      "content": "22-year-old Akshat Srivastava met with Apple CEO Tim Cook at the WWDC after winning Apple's Swift Student Challenge. Hailing from Varanasi, Akshat is currently studying at BITS Pilani's K K Birla College in Goa. He built MindBud app, inspired by his nephew. The app is crafted to offer kids a gateway to classic games and activities from his own childhood.",
      "date": "Monday, 10 June, 2024",
      "id": "c7f20ee058e449a0b07623ff1d56e821",
      "imageUrl": "https://nis-gs.pix.in/inshorts/images/v1/variants/jpg/m/2024/06_jun/10_mon/img_1718005955697_225.jpg?",
      "readMoreUrl": "https://www.moneycontrol.com/technology/wwdc-2024-apple-ceo-tim-cook-meets-22-year-old-indian-student-developer-article-12744807.html/amp?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
      "time": "01:59 pm",
      "title": "Who is 22-year-old Akshat Srivastava who met Apple CEO Tim Cook?",
      "url": "https://shrts.in/ACcjs"
    },
    {
      "author": "System User",
      "content": "New York has introduced a bill to restrict social media algorithms for users under 18, aiming to protect young users from harmful content. The legislation mandates platforms to provide a version of their service without algorithmic recommendations, empowering parents and guardians to control their children's exposure online. This move follows growing concerns over social media's impact on youth.",
      "date": "Monday, 10 June, 2024",
      "id": "e40ff3851f004539a462d1fbad1196a2",
      "imageUrl": "https://nis-gs.pix.in/inshorts/images/v1/variants/jpg/m/2024/06_jun/10_mon/img_1718005939721_272.jpg?",
      "readMoreUrl": "https://www.boomlive.in/web-stories/news/new-york-moves-to-restrict-social-media-algorithms-for-users-under-18-2027?utm_source=inshorts&utm_medium=referral&utm_campaign=fullarticle",
      "time": "01:22 pm",
      "title": "New York to limit social media algorithms for under-18s",
      "url": "https://shrts.in/cRhs9"
    },
    {
      "author": "Debaroti Adhikary",
      "content": "The 22-year-old Indian student developer Akshat Srivastava met Apple CEO Tim Cook at the firm's Worldwide Developers Conference (WWDC) in US. Akshat is in attendance at WWDC after winning Apple's 'Swift Student Challenge' by building an app named 'MindBud'. \"The highlight of my trip was presenting my project to Tim Cook, which felt like a dream come true,\" Akshat said.",
      "date": "Monday, 10 June, 2024",
      "id": "37869bf7370c46dda7921232275aa58a",
      "imageUrl": "https://nis-gs.pix.in/inshorts/images/v1/variants/jpg/m/2024/06_jun/10_mon/img_1718004235701_682.jpg?",
      "readMoreUrl": "https://www.financialexpress.com/life/technology-apple-wwdc-2024-why-tim-cook-was-amazed-to-meet-this-22-year-old-indian-coder-3519981/lite/?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
      "time": "01:20 pm",
      "title": "Indian coder Akshat meets Apple CEO Cook, says 'Dream come true'",
      "url": "https://shrts.in/oFVBJ"
    },
    {
      "author": "System User",
      "content": "Paras Defence has begun deliveries of critical flight systems for the Saras Mk2 program, a significant development in indigenous civilian aircraft development. Paras Defence secured a contract worth 64 crore in March 2023 to supply the Saras Mk2 with its advanced avionics suite. It integrates equipments for control, monitoring, communication, navigation, weather detection, and autopilot system. ",
      "date": "Monday, 10 June, 2024",
      "id": "c2176a3cdeba4557afe772478b1c28c5",
      "imageUrl": "https://nis-gs.pix.in/inshorts/images/v1/variants/jpg/m/2024/06_jun/10_mon/img_1717998944054_567.jpg?",
      "readMoreUrl": "https://iadnews.in/paras-defence-starts-delivery-of-avionics-suite-for-nal-saras-mk2/?utm_source=inshorts&utm_medium=referral&utm_campaign=fullarticle",
      "time": "11:26 am",
      "title": "Paras Defence starts delivery of avionics suite for NAL Saras Mk2",
      "url": "https://shrts.in/fM1MJ"
    },
    {
      "author": "Hiral",
      "content": "Microsoft CEO Satya Nadella attended the T20 World Cup 2024 match between India and Pakistan in New York on Sunday. Venture capital firm Afore Capital's Co-founder Gaurav Jain took to X to share a picture with Nadella, in which both of them were seen wearing Team India jerseys. Notably, Nadella invested in US' Major League Cricket and co-owns Seattle Orcas.",
      "date": "Sunday, 09 June, 2024",
      "id": "92d895e05b33487784ab9d79498a8da7",
      "imageUrl": "https://nis-gs.pix.in/inshorts/images/v1/variants/jpg/m/2024/06_jun/9_sun/img_1717954124245_61.jpg?",
      "readMoreUrl": "https://www.hindustantimes.com/trending/satya-nadella-attends-india-vs-pakistan-t20-world-cup-2024-match-101717946170411-amp.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts",
      "time": "11:09 pm",
      "title": "Satya Nadella seen wearing India jersey at India-Pakistan match in New York",
      "url": "https://shrts.in/r2sWh"
    }
  ]
  return (
    // <div className=" h-[678px] mt-[10px] grid grid-rows-3 grid-cols-2">
    <div className="">
        <div className="  px-2 md:px-24 lg:px-40">
        <Slider {...settings}>
            {
             data.length>1 ? data.map((element)=>(
              <Card element={element}></Card>
            )) : dummydata.map((element)=>(
              <Card element={element}></Card>
            ))
          }
          </Slider>
        </div>
    </div>
  )
}

export default Body


























// import Card from "./Card"
// const Body = () => {
//   return (
//     // <div className=" h-[678px] mt-[10px] grid grid-rows-3 grid-cols-2">
//     <div className="flex flex-row mx-auto sm:px-0 flex-wrap gap-8 justify-center">
//         <Card></Card>
//         <Card></Card>
//         <Card></Card>
//         <Card></Card>
//         <Card></Card>
//         <Card></Card>
//     </div>
//   )
// }

// export default Body