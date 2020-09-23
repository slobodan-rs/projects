import React from 'react'
import Flippy, { FrontSide } from 'react-flippy';

const SeasonOne = ({ season }) => {
    return (
        season.filter(episode => episode.episode.includes('S01')).map(episode =>
            <Flippy style={{ width: '300px', height: '400px', padding: '30px' }} key={episode.id}>
                <FrontSide episode={episode}>
                    <>
                        <img src={episode.img} width="200px" alt={episode.name}/>
                        <div>{episode.episode}</div>
                        <div>{episode.name}</div>
                    </>
                </FrontSide>
            </Flippy>)
    )
}


export default SeasonOne
