import axios from "axios";
import "./css/mainPage.css";
import netflixLogo from "./images/580b57fcd9996e24bc43c529.png";
import globe from "./images/icons8-globe-64.png";
import arrow from "./images/icons8-sort-down-50.png";
import rightArrow from "./images/icons8-right-arrow-50.png";
import tv from "./images/tv.png";
import mobile from './images/mobile-0819.jpg';
import stranger from "./images/stranger things.png";
import download from "./images/download-icon.gif";
import frame from "./images/device-pile-in.png";
import children from "./images/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png";
import videoOne from "./videos/video-tv-in-0819.m4v";
import videoTwo from "./videos/video-devices-in.m4v";
import { useNavigate } from "react-router-dom";
function MainPage() {
    return <>
        <section className="container-fluid bg-black">
            <section className="row">
                <section className="clo-lg-12 col-12 main-section">
                    <header className="header bg-transparent text-white col-lg-10 col-11 m-lg-auto d-lg-flex justify-content-lg-between d-flex justify-content-between">
                        <img src={netflixLogo} className="netflix" />
                        <div className="d-lg-flex align-items-center d-flex">
                            <button className=" button-1 text-white d-lg-flex d-flex justify-content-center align-items-center align-items-lg-center justify-content-lg-around me-lg-3 "><img src={globe} className="language-icon " />
                                <p className="english d-none d-lg-flex">English</p>
                                <img src={arrow} className="sort-icon" /></button>
                            <button className="button-2 fw-bold ms-2">Sign in</button>
                        </div>
                    </header>
                    <div className=" col-lg-11 col-11 m-auto m-lg-auto text-white unlimited-div">
                        <h1 className="unlimited fw-bold d-inline d-lg-flex">Unlimited movies, TV <p className="ms-lg-3 shows">shows and more</p></h1>
                        <h3 className="watch my-lg-3  d-flex d-lg-flex">Watch anywhere. Cancel anytime.</h3>
                        <h5 className="ready d-inline  d-lg-flex ">Ready to watch? Enter your email <p className="to-create"> to create or restart your </p> <p className="membership">membership.</p></h5>
                    </div>
                    <div className="d-lg-flex d-none justify-content-lg-center mt-lg-3 ">
                        <input type="text" placeholder="Email Address" className="col-lg-3 - input me-lg-2 py-lg-3 ps-lg-3" />
                        <div className="">
                            <button className=" py-lg-3 input-button fs-4 fw-bold text-white ps-lg-3 ">Get Started <img src={rightArrow} className="right-arrow  col-lg-2" /></button>
                        </div>
                    </div>
                    <div className="d-lg-none d-inline-block pb-5 input-bottom-main-div">
                        <div className="email-bottom-div d-flex justify-content-center"><input type="text" placeholder="Email Address" className="input-2 ps-3" /></div>
                        <button className="btn-lg input-button-2 fs-4 fw-bold text-white">Get Started <img src={rightArrow} className="right-arrow  col-lg-2" /></button>
                    </div>
                </section>

                <section className="row article-main ">
                    <div className=" article-1 d-lg-flex col-lg-10 m-lg-auto">
                        <div className="col-lg-6 d-lg-flex flex-column justify-content-center">
                            <h1 className="enjoy">Enjoy on your TV</h1>
                            <p className="enjoy-watch d-flex d-lg-none">Watch on smart TVs, PlayStation, Xbox,<p className="enjoy-watch-p d-lg-none">Chromecast, Apple TV, Blu-ray players</p> <p className="enjoy-watch-p-2 d-lg-none"> and more.</p></p>
                            <p className="enjoy-watch d-none d-lg-flex">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray playersand more.</p>
                        </div>
                        <div className="col-lg-5  d-lg-flex m-lg-auto video-parent">
                            <div className="video-div"><video controls autoplay muted loop src={videoOne} className="video-1 "></video></div>
                            <img src={tv} className="frame-1 " />
                        </div>

                    </div>
                </section>

                <section className="row article-main m-lg-auto">
                    <div className=" article-1 d-lg-flex col-lg-10 m-lg-auto">
                        <div className="d-inline d-lg-none margin">
                            <h1 className="enjoy-create d-flex justify-content-center">Download your </h1>
                            <h1 className="enjoy-create d-flex justify-content-center ">shows to watch</h1>
                            <h1 className="enjoy-create d-flex justify-content-center mb-3">offline</h1>
                            <p className="enjoy-create-watch d-flex justify-content-center">Save your favourites easily and always</p>
                            <p className="enjoy-create-watch d-flex justify-content-center" > have something to watch.</p>
                        </div>
                        <div className="col-lg-5 col-11 m-auto m-lg-auto article-2-div">
                            <img src={mobile} className="girl-image" />
                            <div className="col-lg-8 d-lg-flex align-items-lg-center d-flex align-items-center after-girl-image">
                                <img src={stranger} className="stranger ms-lg-2" />
                                <div className="">
                                    <p className="stranger-text d-lg-flex">Stranger Things</p>
                                    <p className="downloading">Downloading...</p>
                                </div>
                                <img src={download} className="downloading-icon" />
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-lg-center margin">
                            <h1 className="enjoy ">Download your shows to watch offline</h1>
                            <p className="enjoy-watch">Save your favourites easily and always have something to watch.</p>
                        </div>
                    </div>
                </section>

                <section className="row article-main m-lg-auto">
                    <div className=" article-1 d-lg-flex col-lg-10 m-lg-auto">
                        <div className="col-lg-6 d-lg-flex flex-column justify-content-center">
                            <h1 className="enjoy">Watch everywhere</h1>
                            <p className="enjoy-watch">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                        </div>
                        <div className="col-lg-5 d-lg-flex m-lg-auto video-parent-2">
                            <div className="video-div-2"><video src={videoTwo} className="video-2" controls autoplay muted loop></video></div>
                            <img src={frame} className="frame-2 " />
                        </div>

                    </div>
                </section>

                <section className="row article-4 m-lg-auto">
                    <div className=" article-1 d-lg-flex col-lg-10 m-lg-auto">
                        <div className="col-lg-6 d-lg-none d-flex flex-column justify-content-center ">
                            <h1 className="enjoy-create d-flex justify-content-center margin">Create profiles for</h1>
                            <h1 className="enjoy-create d-flex justify-content-center mb-3"> kids</h1>
                            <p className="enjoy-create-watch d-flex justify-content-center">Send children on adventures with their</p>
                            <p className="enjoy-create-watch d-flex justify-content-center"> favourite characters in a space made </p>
                            <p className="enjoy-create-watch d-flex justify-content-center">just for them—free with your</p>
                            <p className="enjoy-create-watch d-flex justify-content-center mb-5">membership.</p>
                        </div>
                        <div className="col-lg-5 m-lg-auto">
                            <img src={children} className="children-img " />
                        </div>
                        <div className="col-lg-6 d-lg-flex d-none flex-column justify-content-center margin">
                            <h1 className="enjoy">Create profiles for kids</h1>
                            <p className="enjoy-watch">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                        </div>
                    </div>
                </section>

                <section className="faq ">
                    <div className="faq-div">
                        <p className="col-lg-7 m-lg-auto mb-lg-4 d-lg-flex d-none">Frequently Asked Questions</p>
                        <p className=" d-flex d-lg-none justify-content-center m-0 p-0">Frequently Asked </p>
                        <p className="d-flex d-lg-none justify-content-center m-0 p-0 mb-4">Questions</p>
                    </div>

                    <ul className="accordion col-lg-7">
                        <li>
                            <input type="radio" name="accordion" id="first" />
                            <label for="first">What is Netflix?</label>
                            <div className="content">
                                Netflix is a streaming service that offers a wide variety of
                                award-winning TV shows, movies, anime, documentaries and more
                                – on thousands of internet-connected devices. You can watch as
                                much as you want, whenever you want, without a single ad – all
                                for one low monthly price. There's always something new to
                                discover, and new TV shows and movies are added every week!
                            </div>
                        </li>
                    </ul>

                    <ul className="accordion col-lg-7">
                        <li>
                            <input type="radio" name="accordion" id="second" />
                            <label for="second">How much does Netflix cost?</label>
                            <div className="content">
                                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                                streaming device, all for one fixed monthly fee. Plans range
                                from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                            </div>
                        </li>
                    </ul>

                    <ul className="accordion col-lg-7">
                        <li>
                            <input type="radio" name="accordion" id="third" />
                            <label for="third">Where can i watch?</label>
                            <div className="content">
                                Watch anywhere, anytime. Sign in with your Netflix account to
                                watch instantly on the web at netflix.com from your personal
                                computer or on any internet-connected device that offers the
                                Netflix app, including smart TVs, smartphones, tablets,
                                streaming media players and game consoles. You can also
                                download your favoSrite shows with the iOS, Android, or
                                Windows 10 app. Use downloads to watch while you're on the go
                                and without an internet connection. Take Netflix with you
                                anywhere. How do I cancel?
                            </div>
                        </li>
                    </ul>

                    <ul className="accordion col-lg-7">
                        <li>
                            <input type="radio" name="accordion" id="fourth" />
                            <label for="fourth">How do i cancel?</label>
                            <div className="content">
                                Netflix is flexible. There are no annoying contracts and no
                                commitments. You can easily cancel your account online in two
                                clicks. There are no cancellation fees – start or stop your
                                account anytime.
                            </div>
                        </li>
                    </ul>

                    <ul className="accordion col-lg-7">
                        <li>
                            <input type="radio" name="accordion" id="fifth" />
                            <label for="fifth">What can i watch on Netflix?</label>
                            <div className="content">
                                Netflix has an extensive library of feature films,
                                documentaries, TV shows, anime, award-winning Netflix
                                originals, and more. Watch as much as you want, anytime you
                                want.
                            </div>
                        </li>
                    </ul>

                    <ul className="accordion col-lg-7">
                        <li>
                            <input type="radio" name="accordion" id="sixth" />
                            <label for="sixth">is Netflix good for kids?</label>
                            <div className="content">
                                The Netflix Kids experience is included in your membership to
                                give parents control while kids enjoy family-friendly TV shows
                                and films in their own space. Kids profiles come with
                                PIN-protected parental controls that let you restrict the
                                maturity rating of content kids can watch and block specific
                                titles you don’t want kids to see.
                            </div>
                        </li>
                    </ul>
                </section>
                <section className=" bg-black m-lg-auto pb-lg-5 email-bottom">
                    <div className=" d-lg-none d-inline mt-5">
                        <h5 className="ready text-white">Ready to watch? Enter your email</h5>
                        <h5 className="ready text-white"> to create or restart your </h5>
                        <h5 className="ready text-white">membership.</h5>
                    </div>
                    <h5 className="ready text-white mt-lg-5 d-lg-flex d-none">Ready to watch? Enter your email to create or restart your membership.</h5>
                    <div className="d-lg-flex d-none justify-content-lg-center mt-lg-3 ">
                        <input type="text" placeholder="Email Address" className="col-lg-3 input me-lg-2 py-lg-3 ps-lg-3" />
                        <button className="btn-lg input-button fs-4 fw-bold text-white ps-lg-3">Get Started <img src={rightArrow} className="right-arrow  col-lg-2" /></button>
                    </div>
                    <div className="d-lg-none d-inline-block pb-5 input-bottom-main-div">
                        <div className="email-bottom-div d-flex justify-content-center"><input type="text" placeholder="Email Address" className="input-2 ps-3" /></div>
                        <button className="btn-lg input-button-2 fs-4 fw-bold text-white">Get Started <img src={rightArrow} className="right-arrow  col-lg-2" /></button>
                    </div>
                </section>
                <section className="footer col-lg-10 m-lg-auto bg-black">

                    <p className="text-white fs-lg-6 mb-lg-5 mt-lg-4">Questions? Call 000-800-919-1694</p>
                    <div className="row d-lg-flex d-none col-lg-12">
                        <div className="col col-margin">
                            <a href="#">FAQ</a>
                            <a href="#">Investor Relations</a>
                            <a href="#">Privacy</a>
                            <a href="#">Speed Test</a>
                        </div>
                        <div className="col">
                            <a href="#">Help Centre</a>
                            <a href="#">Jobs</a>
                            <a href="#">Cookie Preferences</a>
                            <a href="#">Legal Notices</a>
                        </div>
                        <div className="col">
                            <a href="#">Account</a>
                            <a href="#">Ways to Watch</a>
                            <a href="#">Corporate Information</a>
                            <a href="#">Only on Netflix</a>
                        </div>
                        <div className="col">
                            <a href="#">Media Centre</a>
                            <a href="#"> Terms of Use</a>
                            <a href="#"> Terms of Use</a>
                        </div>
                    </div>
                    <div className=" d-lg-none d-inline">
                        <div className="d col col-margin">
                            <a href="#">FAQ</a>
                            <a href="#">Investor Relations</a>
                            <a href="#">Privacy</a>
                            <a href="#">Speed Test</a>
                        </div>
                        <div className="col col-margin">
                            <a href="#">Help Centre</a>
                            <a href="#">Jobs</a>
                            <a href="#">Cookie Preferences</a>
                            <a href="#">Legal Notices</a>
                        </div>
                        <div className="col col-margin">
                            <a href="#">Account</a>
                            <a href="#">Ways to Watch</a>
                            <a href="#">Corporate Information</a>
                            <a href="#">Only on Netflix</a>
                        </div>
                        <div className="col col-margin">
                            <a href="#">Media Centre</a>
                            <a href="#"> Terms of Use</a>
                            <a href="#"> Terms of Use</a>
                        </div>
                    </div>
                    <section />
                </section>
                <div className="col-lg-10 m-lg-auto pb-5">
                    <button className=" button-3 button-1  d-lg-flex align-items-lg-center justify-content-lg-around me-lg-3 d-flex align-items-center justify-content-around"><img src={globe} className="language-icon " />
                        <p className="english d-lg-flex d-flex">English</p>
                        <img src={arrow} className="sort-icon" />
                    </button>
                    <p className="text-white fs-6 mt-lg-3 copyright-txt">Netflix India</p>
                </div>
            </section>
        </section >
    </>
}
export default MainPage;