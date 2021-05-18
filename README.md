# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![Solution PC](./images/Solution%20Pc.png)
![Solution Mobile](./images/Solution%20Mobile.png)

### Links

- Solution URL: [Solution](./images/Solution%20Mobile.png)
- Live Site URL: [Live site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

To be able to float an element with the use of animation. I have learned how to use keyframes as well. In terms of javascript, I was able to manipulate elements with style properties.

```css
.img-woman {
	animation: floating-PC-woman 3s ease-in-out infinite;
}

@keyframes floating-PC-woman {
	0% {
		transform: translate(-19%, 20%);
	}
	50% {
		transform: translate(-19%, 17%);
	}
	100% {
		transform: translate(-19%, 20%);
	}
}
```

```js
lastChild.style.transform =
	lastChildStyle.getPropertyValue("transform") === "none"
		? "rotate(180deg)"
		: "none";
```

### Continued development

To be able to manipulate more elements with javascript. Also, to practice more mobile first workflow.

### Useful resources

- [Positioning of Elements](https://github.com/sammy007-debug/Fully-Responsible-FAQ-Accordion) - This helped me get an idea of the position of elements as well as the size of container for desktop size.
- [w3schools](https://www.w3schools.com/) - This helped me get familiarised with the style propoerties used in javascript.
- [GeeksforGeeks](https://www.geeksforgeeks.org/css-floating-animation/) - This helped me to understand more about animations.
- [Element Manipulation](https://github.com/gsemyong/faq-accordion-card) - This helped to understand the javascript side of the project. It gave me an idea as well on how to think of the solution logically.

## Author

- Website - [Fidel Lim](https://fidellim-portfolio.netlify.app/)
- Frontend Mentor - [@fidellim](https://www.frontendmentor.io/profile/fidellim)
- Github - [@fidellim](https://github.com/fidellim)
