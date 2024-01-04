const renderer = {
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
        return template("text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mt-4 mb-6")
      case 3:
        return template("text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl mt-4 mb-4")
      case 4:
        return template("text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mt-4 mb-2")
      case 5:
        return template("text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mt-4 mb-1")
      default:
        return template("text-lg lg:text-xl xl:text-2xl mt-2 mb-2")
      }
  },
  list(body, ordered) {
    const tag = ordered ? "ol" : "ul"
    const template = (classes) => 
    `
      <${tag} class="${classes}">
        ${body}
      </${tag}>
    `
    return template("list-decimal list-inside mb-4")
  },
  paragraph(text) {
    const template = (classes) => 
    `
      <p class="${classes}">
        ${text}
      </p>
    `
    return template("mb-4")
  }
}

export default renderer