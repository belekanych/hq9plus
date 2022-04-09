import { createInterface } from 'readline'
import { interpret } from './interpreter'

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('close', () => {
    process.exit(0)
})

const loop = (): void => {
    rl.question('[HQ9+] > ', (input: string): void => {
        if (input === '.exit') {
            rl.close()
        }

        interpret(input, console.log)
        loop()
    })
}

loop()