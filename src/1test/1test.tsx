export function sum(a: number, b: number) {
    return a + b
}

export function mult(a: number, b: number) {
    return a * b
}


export function splitIntoWords(sentense:string) {
    const words = sentense.split(" ")

        return words.filter(words => words !== "" && words !=="-")
            .map(words => words
                .replace("!", "")
                .replace(".", "")
                .replace(",","")
            )
}