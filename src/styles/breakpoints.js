const numbers = {
    vp3:    381,
    vp4_2:  421,
    vp4:    481,
    vp6:    600,
    vp7:    770,
    vp9:    995,
    vp12:   1285,
    vp13:   1370,
}

let breakpoints = {}
for (const prop in numbers) {
    breakpoints[prop] = `@media only screen and (max-width: ${numbers[prop]-1}px)`
}

export { numbers, breakpoints }
