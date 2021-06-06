import React from "react";
import Button from "../Button/Button";
import './Plancard.scss';

const Plancard = () =>  {
  return (
    <div className="plancard-wrapper">
      <div className="image-section">
          <img src="https://i.picsum.photos/id/718/200/300.jpg?hmac=33vt_lg60EIOuc--jquKwN9epg7jFtlsroU-yn2NvLw"
            width={"100%"} />
      </div>
      <div className="content">
        <div className="instructor">
          <p>Yoga with Gaga</p>
          <p>50+ enrolled</p>
        </div>
        <div className="next-session">
          <p>Next Session</p>
          <p>Price: 490</p>
        </div>
        <div className="book-now">
          <div>View Details</div>
          <Button title="Book Now" />
        </div>
      </div>
    </div>
  )
}

export default Plancard;