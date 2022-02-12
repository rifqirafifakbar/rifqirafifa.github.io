import Image from 'next/image'
import { FaSearch } from 'react-icons/fa';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { portoItem } from './item';
import { useState } from 'react';


export const PortofolioItem = () => {

    const [state, setState] = useState(portoItem);

    return (
        portoItem.map((item,idx) => {
            return (
                <div className="grid-item portofolio" key={idx}>
                    <div className="portofolio-item rounded shadow-dark" >
                        <div className="details">
                            <span className="term text-capitalize">{item.label}</span>
                            <h4 className="title">{item.title}</h4>
                            <span className="more-button"><FaSearch className='icon-search' /><span className="menu-title sr-only">Search</span></span>
                        </div>
                        <div className="thumb">
                            <Image
                                src={item.imgSrc}
                                alt="Picture of the author"
                                className='image-porto'
                                layout="responsive" 
                                objectFit="cover"
                                width='100%'
                                height='60%'
                                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRm knyJckliyjqTzSlT54b6bk+h0R//2Q==" 
                                placeholder="blur" // Optional blur-up while loading
                            />
                            <div className="mask"></div>
                        </div>
                    </div>
                </div>
            )
        })
            
        
       
    )
}