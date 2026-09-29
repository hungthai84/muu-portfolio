export default function Header() {
  const menuItems = [
    { href: "#home", label: "home" },
    { href: "#about-me", label: "about me" },
    { href: "#skills", label: "skills" },
    { href: "#education", label: "education" },
    { href: "#employment", label: "employment" },
    { href: "#portfolio", label: "portfolio" },
    { href: "#award", label: "awards" },
    { href: "#blog", label: "blog" },
    { href: "#contact", label: "contact" },
  ];

  const socialLinks = [
    { href: "https://www.facebook.com/", icon: "fa-facebook" },
    { href: "https://www.twitter.com/", icon: "fa-twitter" },
    { href: "https://in.linkedin.com/", icon: "fa-linkedin" },
    { href: "https://plus.google.com/", icon: "fa-google-plus" },
    { href: "https://www.youtube.com/", icon: "fa-youtube" },
    { href: "https://in.pinterest.com/", icon: "fa-pinterest-p" },
  ];

  return (
    <header>
      <div className="logo">
        <h1>
          <a href="#home">
            <img
              src="https://www.themezaa.com/html/muu/white/images/logo.png"
              alt="MUU Logo"
            />
            MUU - Unique and Creative Resume
          </a>
        </h1>
      </div>

      <nav className="cd-slideshow-nav">
        <button className="cd-nav-trigger" type="button">
          Open Nav
          <span aria-hidden="true" />
        </button>

        <div className="cd-nav-items">
          <div
            className="col-md-6 col-sm-6 nav-left height-100 xs-display-none cover-background"
            style={{
              background:
                "url('https://www.themezaa.com/html/muu/white/images/menu-left.jpg') left center",
            }}
          >
            <div className="opacity-full bg-dark-gray" />
            <div className="nav-center-block">
              <div className="nav-middle-block padding-fifteen-lr sm-padding-three-lr">
                <div className="col-md-12 col-sm-12 no-padding-lr padding-twenty-bottom text-center">
                  <a href="#home" className="contact-logo">
                    <img
                      src="https://www.themezaa.com/html/muu/white/images/menu-logo.png"
                      alt="Menu Logo"
                    />
                  </a>
                </div>

                <div className="menu-left-bottom">
                  <div className="col-sm-12 col-xs-12 no-padding menu-social-icon">
                    {socialLinks.map((item) => (
                      <a
                        key={item.icon}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className={`fa ${item.icon} icon-20 text-light-gray-link`} />
                      </a>
                    ))}
                  </div>

                  <div className="col-md-12 col-sm-12 no-padding text-light-gray text-extra-small text-uppercase font-weight-400">
                    &copy; 2016 MUU is Proudly Powered by{" "}
                    <a
                      href="http://www.themezaa.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-extra-small text-light-gray-link font-weight-400"
                    >
                      Themezaa.
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6 col-xs-12 nav-right height-100 no-padding-lr padding-five-tb">
            <div className="menu-customscrollbar">
              <div className="nav-center-block">
                <div className="nav-middle-block">
                  <ol className="menu-items">
                    {menuItems.map((item) => (
                      <li key={item.href}>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
