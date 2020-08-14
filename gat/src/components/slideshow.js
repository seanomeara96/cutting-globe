import React from "react"

class SlideShow extends React.Component {
  state = { count: 0, numberOfSlides: 4 }
  constructor(props) {
    super(props)
    this.timer = null
    this.interval = 3000
  }
  componentDidMount() {
    this.startSlideShow()
  }
  injectSlides() {
    const slides = []
    for (var i = 0; i < this.state.numberOfSlides; i++) {
      slides.push(
        <div
          key={i}
          className={
            i === this.state.count
              ? "slideshow__slide"
              : "slideshow__slide--is-hidden"
          }
        >
          <img
            src={`/images/step${i + 1}.png`}
            className="slideshow__img"
            alt=""
          />
        </div>
      )
    }
    return slides
  }
  startSlideShow() {
    this.timer = setTimeout(this.showNextSlide.bind(this), this.interval)
  }
  showNextSlide = () => {
    const { count } = this.state
    clearTimeout(this.timer)

    if (count === this.state.numberOfSlides - 1) {
      this.setState({ count: 0 })
    } else {
      this.setState({ count: count + 1 })
    }

    this.timer = setTimeout(this.showNextSlide.bind(this), this.interval)
  }
  showPrevSlide = () => {
    const { count } = this.state
    clearTimeout(this.timer)

    if (count === 0) {
      this.setState({ count: this.state.numberOfSlides - 1 })
    } else {
      this.setState({ count: count - 1 })
    }

    this.timer = setTimeout(this.showNextSlide.bind(this), this.interval)
  }

  render() {
    return (
      <div className="slideshow">
        {this.injectSlides()}
        <span
          className="slideshow__btn slideshow__btn--left"
          onClick={this.showPrevSlide}
        >
          <i className="fas fa-arrow-left"></i>
        </span>
        <span
          className="slideshow__btn slideshow__btn--right"
          onClick={this.showNextSlide}
        >
          <i className="fas fa-arrow-right"></i>
        </span>
      </div>
    )
  }
}
export default SlideShow
