export const ExperienceSection = () => {
  return (
    <div className="section px-3 px-lg-4 pt-5" id="experience">
      <div className="container-fluid blue-bg">
        <div className="container">
            <div className="text-center mb-5">
                <h2 className="marker marker-center">My Experience</h2>
            </div>

          {/* //first section */}
            <div className="row align-items-center how-it-works">
                <div className="col-2 text-center bottom"> 
                    <div className="circle">1</div>
                </div>

                <div className="col-6">
                    <h3>Xtremax</h3>
                    <span>Jun 2021 - Present</span>
                    <p>
                    Xtremax is an established, award-winning digital solutions agency, located in Singapore (HQ).</p>
                    My responsibilities are :
                    <ul>
                        <li>Develop Front-end web client used React, Pug, and Jquery Framework, I used SCSS for styling, technology for state management, i used Redux , and I'm familiar with RESTful APIs</li>
                        <li>Slicing HTML use Adobe Photoshop</li>
                        <li>Manage existing website</li>
                        <li>E2E testing used Cypress</li>
                        <li>Implement Accessibility, SEO, Best Practice, and Progressive Web Apps in development website</li>
                    </ul>
                </div>
            </div>
                

            {/* //path between 1-2 */}
            <div className="row timeline">
                <div className="col-2">
                <div className="corner top-right"></div>
                </div>
                <div className="col-8">
                <hr />
                </div>
                <div className="col-2">
                <div className="corner left-bottom"></div>
                </div>
            </div>
            
            {/* //second section */}
            <div className="row align-items-center justify-content-end how-it-works">
                <div className="col-6 text-right">
                <h3>Plexus Techdev Studio</h3>
                <span>Jun 2020 - Jun 2021</span>
                <p>
                Plexus is a team of programmers, 3D artists, tinkerers, we build apps, games, web-based, mobile, AR, VR.</p>
                My responsibilities are :
                <ul>
                    <li>Develop Front-end web client use react.Js. with bootstrap css with technology used state management (Redux), I'm familiar with RESTful APIs , and familiar with Authorization ( JSON Web Token )</li>
                    <li>Develop Front-end for CMS use react.Js and Jquery.</li>
                    <li>Manage existing website</li>
                    <li>Slicing HTML use Adobe Photoshop, Adobe Illustrator or Adobe XD</li>
                    <li>Responsible for building the user side interface</li>
                    <li>Provide suggestions and feedback to clients on UI / UX</li>
                    <li>Develop Games use technology HTML5 and Construct 2</li>
                </ul>
                </div>
                <div className="col-2 text-center full">
                <div className="circle">2</div>
                </div>
            </div>
            {/* //path between 2-3 */}
            <div className="row timeline">
                <div className="col-2">
                <div className="corner right-bottom" />
                </div>
                <div className="col-8">
                <hr />
                </div>
                <div className="col-2">
                <div className="corner top-left" />
                </div>
            </div>
            {/* //third section */}
            <div className="row align-items-center how-it-works">
                <div className="col-2 text-center top"> 
                    <div className="circle">3</div>
                </div>

                <div className="col-6">
                    <h3>Young Corporation</h3>
                    <span>Jan 2017 - Dec 2019</span>
                    <p>
                    Youngcorporation is an agency for website develop and event organizer
                    </p>
                    my responsibilities :
                    <ul>
                        <li>Develop website for company profile and application booking for customer use. JQuery. with bootstrap Css ,technology used RESTful APIs (use Axios.js or Ajax)</li>
                        <li>Colouring grading with Adobe Photoshop,CorelDraw,Adobe Illustator,Adobe After Effect</li>
                        <li>Take full responsibility for the media at the event</li>
                        <li>Prepare multimedia needs at the event</li>
                        <li>made teaser video for Instagram'client</li>
                        <li>Photography</li>
                        <li>Videographer</li>
                        <li>Editing video / Photography</li>
                    </ul>
                </div>
            </div>
            
        </div>
      </div>
    </div>
  );
};
