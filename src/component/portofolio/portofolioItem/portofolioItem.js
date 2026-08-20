import Image from 'next/image'
import { FaSearch } from 'react-icons/fa';
import { portoItem } from './item';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';


export const PortofolioItem = () => {

    const [state, setState] = useState(portoItem);
    const [selected, setSelected] = useState(null);

    const handleOpen = (item) => setSelected(item);
    const handleClose = () => setSelected(null);

    return (
        <>
            {portoItem.map((item,idx) => {
                return (
                    <div className="grid-item portofolio" key={idx}>
                        <div className="portofolio-item rounded shadow-dark" >
                            <div className="details">
                                <span className="term text-capitalize">{item.label}</span>
                                <h4 className="title">{item.title}</h4>
                                <span className="more-button" role="button" onClick={() => handleOpen(item)}><FaSearch className='icon-search' /><span className="menu-title sr-only"></span></span>
                            </div>
                            <div className="thumb">
                                <Image
                                    src={item.imgSrc}
                                    alt={item.title}
                                    className='image-porto'
                                    width={800}
                                    height={480}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                    placeholder="blur"
                                />
                                <div className="mask"></div>
                            </div>
                        </div>
                    </div>
                )
            })}

            <Modal show={!!selected} onHide={handleClose} centered size="xl">
                <Modal.Header closeButton>
                    <Modal.Title>{selected?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-0">
                    {selected && (
                        <Image
                            src={selected.imgSrc}
                            alt={selected.title}
                            width={1200}
                            height={720}
                            style={{ width: '100%', height: 'auto' }}
                        />
                    )}
                </Modal.Body>
            </Modal>
        </>
    )
}
