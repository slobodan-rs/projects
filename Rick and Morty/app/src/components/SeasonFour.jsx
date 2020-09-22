import React from 'react'
import Flippy, { FrontSide } from 'react-flippy';

const SeasonFour = ({ season, setCount }) => {
    setCount(2)
    setCount(3)
    return (
        season.filter(episode => episode.episode.includes('S04')).map(episode =>
            <Flippy style={{ width: '200px', height: '300px', padding: '30px' }} key={episode.id}>
                <FrontSide episode={episode}>
                    <>
                        <div>{episode.episode}</div>
                        <div>{episode.name}</div>
                    </>
                </FrontSide>
            </Flippy>)
    )
}


export default SeasonFour