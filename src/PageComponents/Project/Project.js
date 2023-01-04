import React from 'react';
import "./Project.css"
import omok from "../../Images/OmokSS.PNG"

export default function Project() {
  return (
    <div className='project__container'>
        <div className='project__title'>
            <h1 className='intro' id='project__intro'>Current Project</h1>
            <p>Omok: MMORPG Resource Center - 
                <a
                    href={"/"}
                    target='_blank'
                    rel="noreferrer"
                    id='project__link'
                >
                    Here</a>
            </p>
            <p>Technologies: MongoDB, Express, React, Node</p>
        </div>
        <div className='project__information'>
            <div className='project__problem'>
                <p id='project__details' >
                    Information is scattered everywhere.
                </p>
                <p id='project__details'>
                    A player must search through multiple resources to find what they need.
                </p>
            </div>
            <p id='project__details'>
                By creating a resource that provides the necessary resources in one area, I reduced search time and increased player efficiency in the community.
            </p>
        </div>
        <img src={omok} alt="Resource Page"/>
    </div>
  )
}
