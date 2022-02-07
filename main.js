/* last update: Feb 7, 2022 */

const date = new Date()

const verboseDate = [
    date.toLocaleDateString('en', { month: 'long' }),
    date.getFullYear()
].join(' ')
