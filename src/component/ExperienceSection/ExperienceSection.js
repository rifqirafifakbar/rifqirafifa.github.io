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
                    Front-end development for several projects ranging from Singapore Government Technology Agency (Singapore GovTech) </p>
                    My responsibilities in Xtremax are :
                    <ul>
                        <li>Developing frontend features for a large-scale hospitality and attractions booking platform using React.js</li>
                        <li>Building reusable, scalable UI components across booking, listing, and itinerary flows</li>
                        <li>Managing complex application state with Redux to keep real-time availability, pricing, and cart data in sync</li>
                        <li>Implementing responsive layouts tested across desktop and mobile devices</li>
                        <li>Collaborating with backend/API teams to integrate dynamic, frequently-updated content</li>
                        <li>Working within an established design system to ensure UI consistency</li>
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
            
        </div>
      </div>
    </div>
  );
};
