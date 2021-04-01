import React from 'react'
import Portrait from "./Portrait";

/* Executive Board images */
import GM from '../../img/EC/adam.JPG'
import GP from '../../img/EC/liam.jpg'
import GMC from '../../img/Image from iOS.png'
import GS from '../../img/EC/roberto.jpg'
import GT from '../../img/EC/tony.jpg'

const Leadership = () => {
    return (
        <div className="leadership">
            <div className="executive-year">
                <p>2020 - 2021 Executive Board</p>
            </div>

            <Portrait
                name="Adam Tyler"
                title="Grand Master"
                pic={GM}
                link="https://www.instagram.com/ayyyitsadam/"
            />

            <Portrait
                name="Liam Stone"
                title="Grand Procurator"
                link="https://www.instagram.com/liamstone1814/"
                pic={GP}
            />

            <Portrait
                name="Jose Falconi"
                title="Grand Master of Ceremonies"
                link="https://www.instagram.com/_jossaaa_/"
                pic={GMC}
            />

            <Portrait
                name="Roberto Medina"
                title="Grand Scribe"
                link="https://www.instagram.com/_.rmedina._/"
                pic={GS}
            />

            <Portrait
                name="Tony De Alba"
                title="Grand Treasurer"
                link="https://www.instagram.com/t_de_alba/"
                pic={GT}
            />
        </div>
    )
}

export default Leadership;