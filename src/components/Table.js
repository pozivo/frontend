import React from 'react'
import Button from './Button'
import Flop from './Flop'
import Player from './Player'

const Table = () => {
    return (
        <div className="container table">
            <div className="row align-items-start p-3">
                <div className="col">
                    One of three columns
                </div>
                <div className="col d-flex flex-row gap-5">
                    <Player>
                    </Player>
                    <Player>
                    </Player>
                    <Player>
                    </Player>
                </div>
                <div className="col">
                    One of three columns
                </div>
            </div>
            <div className="row main">
                <div className="col player-left d-flex flex-column gap-5">
                    <Player>
                    </Player>
                    <Player>
                    </Player>
                </div>
                <div className="col">
                    <Flop />
                </div>
                <div className="col player-right d-flex flex-column gap-5">
                    <Player>
                    </Player>
                    <Player>
                    </Player>
                </div>
            </div>
            <div className="row align-items-end p-3">
                <div className="col">
                    One of three columns
                </div>
                <div className="col d-flex flex-row gap-5">
                    <Player>
                    </Player>
                    <Player>
                        <h4>AAAAA</h4>
                    </Player>
                    <Player>
                    </Player>

                </div>
                <div className="col">
                    One of three columns
                </div>
            </div>
        </div>

    )
}

export default Table