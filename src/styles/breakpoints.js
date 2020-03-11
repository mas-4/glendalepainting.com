const numbers = {
    vp3: 380,
    vp4_2:  420,
    vp4:    480,
    vp6:    600,
    vp7:    768,
    vp9:    992,
    vp12:   1200,
}

let breakpoints = {}
for (const prop in numbers) {
    breakpoints[prop] = `@media only screen and (max-width: ${numbers[prop]-1}px)`
}

export { numbers, breakpoints }
