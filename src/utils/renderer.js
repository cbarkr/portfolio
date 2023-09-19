const renderer = {
  // Apply specific styling to headings
  heading(text, level) {
    const template = (classes) => 
    `
      <h${level} class="${classes}">
      ${text}
      </h${level}>
    `

    switch(level) {
      case 1:
        return template("text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-8");
      case 2:
        return template("text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mb-6")
      case 3:
        return template("text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mb-4")
      case 4:
        return template("text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-2")
      case 5:
        return template("text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-1")
      default:
        return template("text-lg lg:text-xl xl:text-2xl mb-2")
      }
  }
}

export default renderer