import React, { Component } from "react";
import Loader from "react-loader-spinner";

class LazyBackground extends React.Component {
  state = { src: null };

  componentDidMount() {
    const { src } = this.props;

    const imageLoader = new Image();
    imageLoader.src = src;

    imageLoader.onload = () => {
      this.setState({ src });
    };
  }

  render() {
      const {src} = this.state
    return src ? (
      <div
        {...this.props}
        style={{
          backgroundImage: `url(${src})`,
        }}
      >
        {this.props.children}
      </div>
    ) : (
      <Loader
        type="Puff"
        className="spinner-main"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }
}

export default LazyBackground