const IMG = "https://www.themezaa.com/html/muu/white/images";

const slides = [
  {
    bg: `${IMG}/home-slider-1.jpg`,
    number: "01",
    title: (
      <>
        Hello!
        <br />
        My Name is
        <br />
        Beckham Roy
      </>
    ),
    description:
      "I design thoughtful digital experiences & beautiful brand aesthetics. I provide high quality web development services.",
    signature: true,
  },
  {
    bg: `${IMG}/home-slider-2.jpg`,
    number: "02",
    title: (
      <>
        I am Creative
        <br />
        UI/UX Designer
      </>
    ),
    description:
      "Working with a strong focus on design and user experience. I create digital experiences for brands and companies.",
    cta: { href: "#about-me", label: "Read More" },
  },
  {
    bg: `${IMG}/home-slider-3.jpg`,
    number: "03",
    title: (
      <>
        Yes I Believe
        <br /> in Quality
      </>
    ),
    description:
      "We design websites with conversions in mind, our websites look great, but each page has a clearly defined conversion goal.",
    cta: { href: "#portfolio", label: "Read More" },
  },
];

export default function HomeSlide() {
  return (
    <li id="home" className="visible">
      <ol className="sub-slides">
        {slides.map((slide) => (
          <li key={slide.number}>
            <div className="cd-slider-content">
              <div
                className="content-wrapper cover-background padding-70px-bottom xs-padding-50px-bottom"
                style={{ backgroundImage: `url('${slide.bg}')` }}
              >
                <div className="mCustomScrollbar">
                  <div className="col-md-6 col-sm-12 col-xs-12 border-right height-100 sm-no-border-right">
                    <div className="center-block padding-eleven-left padding-eight-top md-padding-eight-left xs-no-padding-left">
                      <div className="middle-block">
                        <h2 className="text-gray margin-six-bottom margin-two-top">
                          {slide.title}
                        </h2>
                        <p
                          className={`text-medium text-magenta font-weight-200 width-70 md-width-90 sm-width-55 xs-width-100 ${
                            slide.signature
                              ? "margin-ten-bottom"
                              : "margin-five-bottom"
                          }`}
                        >
                          {slide.description}
                        </p>

                        {"signature" in slide && slide.signature && (
                          <div className="signature">
                            <img src={`${IMG}/signature.png`} alt="Signature" />
                          </div>
                        )}

                        {"cta" in slide && slide.cta && (
                          <a
                            href={slide.cta.href}
                            className="btn medium-btn highlight-button-gray inner-link"
                          >
                            {slide.cta.label}{" "}
                            <i className="fa fa-long-arrow-right text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="slide-number text-magenta xs-display-none">
                  {slide.number}
                  <span>/</span>03
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </li>
  );
}
