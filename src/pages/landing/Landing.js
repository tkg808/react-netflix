import './Landing.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import EmailForm from '../../components/emailForm/EmailForm';
import FaqCard from '../../components/faqCard/FaqCard';
import Footer from '../../components/footer/Footer';

export default function Landing()
{
  const landingFooterLinks =
    [
      { text: "FAQ", link: "" },
      { text: "Help Center", link: "" },
      { text: "Account", link: "" },
      { text: "Media Center", link: "" },
      { text: "Investor Relations", link: "" },
      { text: "Jobs", link: "" },
      { text: "Redeem Gift Cards", link: "" },
      { text: "Buy Gift Cards", link: "" },
      { text: "Ways to Watch", link: "" },
      { text: "Terms of Use", link: "" },
      { text: "Privacy", link: "" },
      { text: "Cookie Preferences", link: "" },
      { text: "Corporate Information", link: "" },
      { text: "Contact Us", link: "" },
      { text: "Speed Test", link: "" },
      { text: "Legal Notices", link: "" },
      { text: "Only on Netflix", link: "" },
    ];

  const [heroEmail, setHeroEmail] = useState("");
  const [activeHeroInput, setActiveHeroInput] = useState(false);
  const [validHeroInput, setValidHeroInput] = useState(false);

  return (
    <div className="landing-page-container">
      <header className="landing-page-header-container">
        <div className="landing-page-header-content">
          <Link to="" className="landing-page-logo-signup-link">
            <svg
              viewBox="0 0 111 30"
              className="svg-icon svg-icon-netflix-logo"
              aria-hidden="true"
              focusable="false"
            >
              <g id="netflix-logo">
                <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path></g></svg>
          </Link>
        </div>
      </header>
      <div className="landing-page-cards-container">
        <div className="landing-page-hero-card-container">
          <div className="landing-page-background-container">
            <img
              src="https://assets.nflxext.com/ffe/siteui/vlv3/1ef84595-1fdb-4404-adac-15215ceeb3ae/9b7e4892-200e-4740-909b-cdd33763fe9f/US-en-20220711-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
              alt="landing-page-background-image"
              className="landing-page-background-image" />
            <div className="landing-page-background-gradient-container" />
          </div>
          <div className="landing-page-hero-card-content-container">
            <h1 className="landing-page-hero-card-content-title">
              Unlimited movies, TV shows, and more.
            </h1>
            <h2 className="landing-page-hero-card-content-subtitle">
              Watch anywhere. Cancel anytime.
            </h2>
            <EmailForm
              emailInput={heroEmail}
              setEmailInput={setHeroEmail}
              activeInput={activeHeroInput}
              setActiveInput={setActiveHeroInput}
              validInput={validHeroInput}
              setValidInput={setValidHeroInput} />
          </div>
        </div>
        <div className="landing-page-watch-card-container">
          <div className="landing-page-watch-card-content-container">
            <div className="landing-page-watch-card-content-text-container">
              <h1>Enjoy on your TV.</h1>
              <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
            </div>
            <div className="landing-page-watch-card-content-image-container">
              <div className="landing-page-watch-card-content-animation-container">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                  alt="landing-page-card-content-image" />
                <div className="landing-page-watch-card-content-animation">
                  <video autoPlay playsInline muted loop>
                    <source
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                      type="video/mp4" />
                  </video>
                  <div className="landing-page-watch-card-content-animation-text">

                  </div>
                  <div className="landing-page-watch-card-content-animation-custom">

                  </div>
                </div>
              </div>
            </div>
            <div className="center-pixel" />
          </div>
        </div>

        <div className="landing-page-download-card-container">
          <div className="landing-page-download-card-content-container flipped">
            <div className="landing-page-download-card-content-text-container flipped">
              <h1>Download your shows to watch offline.</h1>
              <h2>Save your favorites easily and always have something to watch.</h2>
            </div>
            <div className="landing-page-download-card-content-image-container">
              <div className="landing-page-download-card-content-animation-container">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="landing-page-card-content-image" />
                <div className="landing-page-download-card-content-animation">
                  <div className="landing-page-download-card-content-animation-image">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
                  </div>
                  <div className="landing-page-download-card-content-animation-text">
                    <div>Stranger Things</div>
                    <div>Downloading...</div>
                  </div>
                  <div className="landing-page-download-card-content-animation-custom">

                  </div>
                </div>
              </div>
            </div>
            <div className="center-pixel" />
          </div>
        </div>
        <div className="landing-page-stream-card-container">
          <div className="landing-page-stream-card-content-container">
            <div className="landing-page-stream-card-content-text-container">
              <h1>Watch everywhere.</h1>
              <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
            </div>
            <div className="landing-page-stream-card-content-image-container">
              <div className="landing-page-stream-card-content-animation-container">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="landing-page-stream-card-content-image" />
                <div className="landing-page-stream-card-content-animation">
                  <video
                    autoPlay
                    playsInline
                    muted
                    loop>
                    <source
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                      type="video/mp4" />
                  </video>
                  <div className="landing-page-stream-card-content-animation-text">
                  </div>
                  <div className="landing-page-stream-card-content-animation-custom">
                  </div>
                </div>
              </div>
            </div>
            <div className="center-pixel" />
          </div>
        </div>
        <div className="landing-page-kids-card-container">
          <div className="landing-page-kids-card-content-container flipped">
            <div className="landing-page-kids-card-content-text-container flipped">
              <h1>Create profiles for kids.</h1>
              <h2>Send kids on adventures with their favorite characters in a space made just for them-free with your membership.</h2>
            </div>
            <div className="landing-page-kids-card-content-image-container">
              <div className="landing-page-kids-card-content-animation-container">
                <img src="https://occ-0-2218-116.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f" alt="landing-page-card-content-image" />
                <div className="landing-page-kids-card-content-animation">
                  <div className="landing-page-kids-card-content-animation-text">
                  </div>
                  <div className="landing-page-kids-card-content-animation-custom">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="center-pixel" />
        </div>
        < FaqCard />
      </div>
      <div className="landing-page-footer-container">
        <Footer footerLinks={landingFooterLinks} />
      </div>
    </div>
  );
}