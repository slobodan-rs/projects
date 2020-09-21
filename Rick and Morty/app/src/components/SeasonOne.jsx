import React from 'react'
import Flippy, { FrontSide } from 'react-flippy';
import { useHistory } from 'react-router-dom';

const SeasonOne = ({ season }) => {
    // const history = useHistory()

    // const handleClick = (id) => {
    //     history.push(`season1/${id}`)
    //     setEpisode(id)
    // }
    return (
        season.filter(episode => episode.episode.includes('S01')).map(episode =>
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


export default SeasonOne
