import { HasFormatter } from './modules/HasFormatter.js'
import { Invoice } from './modules/Invoice.js'
import { ListTemplate } from './modules/ListTemplate.js'
import { Payment } from './modules/Payment.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement
const ul = document.querySelector('ul')!

const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let doc: HasFormatter
    if(type.value === 'invoice'){
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }
    toFrom.value = ''
    details.value = ''
    amount.value = ''

    list.render(doc, type.value, 'end')
})


