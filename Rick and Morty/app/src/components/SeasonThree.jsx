import React from 'react'
import Flippy, { FrontSide } from 'react-flippy';

const SeasonThree = ({ count, season, setCount }) => {
    setCount(2)
    return (
        season.filter(episode => episode.episode.includes('S03')).map(episode =>
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


export default SeasonThree
