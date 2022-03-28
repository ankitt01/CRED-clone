module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    minHeight: {
      '70': '70%',
    },
    extend: {
      backgroundImage: {
        'product-showcase': "url('https://web-images.credcdn.in/_next/assets/images/home-page/video-bg.png')",
        'deserve': "url('https://web-images.credcdn.in/_next/assets/images/home-page/deserve-more-bg.jpg')",
        'smDeserve': "url('https://web-images.credcdn.in/_next/assets/images/home-page/deserve-more-bg-mobile.jpg')",
        "trust": "url('https://web-images.credcdn.in/_next/assets/images/home-page/trust-bg.jpg')",
        "smTrust": "url('https://web-images.credcdn.in/_next/assets/images/home-page/trust-bg-mobile.jpg')",
        "security": "url('https://web-images.credcdn.in/_next/assets/images/home-page/money-matters-bg.jpg')",
        "smSecurity": "url('https://web-images.credcdn.in/_next/assets/images/home-page/money-matters-bg-mobile.jpg')",
      },
      colors: {
        "bg-black": "#0f0f0f",
        "text": "#f8f8f8",
        "mobile-box-shadow": "#b0b0b229 0px -5px 6px 0px inset #0000003d 4px 6px 11px 1px inset",
        "mobile-bg": "#272b2d",
        "white-bg": "#f8f8f8",
        "bg-green": "#027757",
        "bg-gray": "#272727",
        "link-blue": "#7ea2ec",
        "bg-light-gray": "#272b2d6e",
        "bg-red": "#ee2f4c",
        "bg-purple": "rgb(90, 30, 203)",
        "bg-blue": "rgb(26, 97, 233)",
        "light-black": "rgb(39, 39, 39)",
      }
    },
  },
  plugins: [],
}
