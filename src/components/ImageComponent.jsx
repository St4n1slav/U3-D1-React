import { Component } from "react";

class ImageComponent extends Component {
  render() {
    return (
      <>
        <img src={this.props.imageUrl} style={{ height: this.props.imgHeight }} />
      </>
    );
  }
}

export default ImageComponent;
