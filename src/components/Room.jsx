import Window from './Window'
import Pinboard from './Pinboard'
import Bookshelf from './Bookshelf'
import Desk from './Desk'
import './Room.css'

function Room() {
    return (
        <div className="room">
            <div className="fairy-lights">
                {Array.from({ length: 14 }).map((_, i) => (
                    <div key={i} className="bulb" style={{ animationDelay: `${i * 0.3}s` }} />
                ))}
            </div>

            <div className="room-top">
                <Window />
                <Pinboard />
            </div>

            <div className="room-bottom">
                <Bookshelf />
                <Desk />
            </div>
        </div>
    )
}

export default Room