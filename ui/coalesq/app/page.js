import Image from "next/image";

import Navbar from "../components/Navbar"

import img1 from '../public/images/1.jpg'
import img2 from '../public/images/2.jpg'
import img3 from '../public/images/3.jpg'
import img4 from '../public/images/4.jpg'
import img5 from '../public/images/5.jpg'
import img6 from '../public/images/6.jpg'
import logo from '../public/images/mclaren.jpg'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex  flex-col items-center justify-between pt-1">
        <div id="story-carousel" className="mt-4 mb-2">
          <swiper-container class="mySwiper" pagination="true" pagination-type="progressbar" pagination-clickable="true" navigation="true" space-between="30"
            effect="fade" centered-slides="true" autoplay-delay="2000" autoplay-disable-on-interaction="false">
            <swiper-slide>
              <Image src={img1} alt="Picture of the author" priority />
            </swiper-slide>
            <swiper-slide lazy="true">
              <Image src={img2} loading="lazy" alt="Picture of the author" />
            </swiper-slide>
            <swiper-slide lazy="true">
              <Image src={img3} loading="lazy" alt="Picture of the author" />
            </swiper-slide>
            <swiper-slide lazy="true">
              <Image src={img4} loading="lazy" alt="Picture of the author" />
            </swiper-slide>
            <swiper-slide lazy="true">
              <Image src={img5} loading="lazy" alt="Picture of the author" />
            </swiper-slide>
            <swiper-slide lazy="true">
              <Image src={img6} loading="lazy" alt="Picture of the author" />
            </swiper-slide>
          </swiper-container>
        </div>

        <div id="story-overlay" className="mt-8 mb-2">
          <div id="story-heading" className="mt-4">
            <div id="user-icon">
              <Image src={logo} alt="Picture of the author" priority />
            </div>
            <div id="user-name">
              mclaren
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                className="bi bi-patch-check-fill ms-1" viewBox="0 0 16 16">
                <path
                  d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
              </svg>
            </div>
            <div id="story-time" className="ms-1">21h</div>
            <div id="controls" className="ms-1 me-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                className="bi bi-pause-circle-fill me-1" viewBox="0 0 16 16">
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                className="bi bi-three-dots ms-2" viewBox="0 0 16 16">
                <path
                  d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
              </svg>
            </div>
          </div>
          <div id="story-footer">
            <div>
              <input id="story-reply" className="form-control" type="text" placeholder="Reply to mclaren..."
                aria-label="default input example"></input>
            </div>
            <div id="story-actions" className="me-2">
              <svg className="ms-1 me-2 bi bi-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                viewBox="0 0 16 16">
                <path
                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
              </svg>
              <svg className="ms-1 bi bi-send" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                viewBox="0 0 16 16">
                <path
                  d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
              </svg>
            </div>
          </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
      </main >
    </div >
  );
}
