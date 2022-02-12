import { PortofolioItem } from "./portofolioItem/portofolioItem"

export const Portfolio = () => {

    return(

        <div className="section px-2 px-lg-4 pt-5" id="portofolio">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="marker marker-center">Portofolio </h2>

                </div>

                <div className="portoGroup">
                    <PortofolioItem />
                </div>
            </div>
        </div>
       
  
    )
}