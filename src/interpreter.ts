export function interpret(source: string, output: (message: string) => void): void {
  let counter: number = 0

  for (const c of source) {
      switch (c) {
          case 'H':
              output('Hello world!')
              break
          case 'Q':
              output(source)
              break
          case '9':
              for (let beer = 99; beer > 1; beer--) {
                  output(`${beer} bottles of beer on the wall, ${beer} bottles of beer`)
                  output(`Take one down and pass it around, ${beer - 1} bottles of beer on the wall`)
              }
              output('1 bottle of beer on the wall, 1 bottle of beer')
              output('Take one down and pass it around, no bottles of beer on the wall')
              break
          case '+':
              counter++
              break
          default:
            output('Syntax error!')
      }
  }
}