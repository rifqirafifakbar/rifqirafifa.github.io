import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'


const styleColor = {
    backgroundColor: '#F4F6F8!important'
}

export const Section1 = ()=> {
    return (
        <section className="section-1">
            <div className="cover bg-light" style={styleColor}>
                <div className="container px-3">
                    <div className="row justify-content-center pt-5">
                        <div className="col-lg-6 text-center">
                            <div className='profile'>
                                {/* <Image
                                    src={profilePic}
                                    alt="Picture of the author"
                                    // width={500} automatically provided
                                    // height={500} automatically provided
                                    // blurDataURL="data:..." automatically provided
                                    // placeholder="blur" // Optional blur-up while loading
                                /> */}
                            </div>
                            <div className="mt-5">
                                <p className="lead text-uppercase mb-1">Hello!</p>
                                <h1 className="intro-title marker" data-aos="fade-left" data-aos-delay="50">I’m Rifqi Rafif Akbar</h1>
                                <p className="lead fw-normal mt-3" data-aos="fade-up" data-aos-delay="100">Frontend Developer</p>
                                <div className="social-nav" data-aos="fade-up" data-aos-delay="200">
                                    <nav role="navigation">
                                        <ul className="nav justify-content-center">
                                        <li className="nav-item"><a className="nav-link" href="https://www.linkedin.com/in/rifqirafifa/" title="LinkedIn"><FontAwesomeIcon icon={faTwitter}/><span className="menu-title sr-only">LinkedIn</span></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wave-bg">

          </div>
        </section>
    )
}