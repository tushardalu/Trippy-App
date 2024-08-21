import { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img
            src="https://i.pinimg.com/originals/b8/ff/89/b8ff89b1f570137057e5c4c1d5db8632.jpg"
            alt="img"
          />
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/e3/cc/8d/caption.jpg?w=300&h=300&s=1"
            alt="img"
          />
        </div>
      </div>
    );
  }
}

export default DestinationData;
