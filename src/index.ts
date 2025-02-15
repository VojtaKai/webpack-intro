import printMe from './print';
import './styles.css'
import Icon from './icon.png'
import Data from './data.xml'
import Notes from './data.csv'

async function getDynamicElement() {
    try {
        const lodash = await import('lodash')
        const { default: _ } = lodash

        const element = document.createElement('div');

        // Lodash, now imported by this script
        element.innerHTML = _.join(['Hello', 'webpack', 'says', 'Vojta!'], ' ');
        element.className = 'text-element'

        return element

    } catch (e) {
        throw new Error('Failed')
    }
}

async function component() {
    const element = await getDynamicElement()
    const wrapper = document.createElement('div');
    const iconDiv = document.createElement('div');
    const btn = document.createElement('button')

    wrapper.classList.add('wrapper')

    

    btn.innerHTML = 'click me and check the console'
    btn.onclick = printMe

    const myIcon = new Image()
    myIcon.src = Icon
    iconDiv.appendChild(myIcon)

    wrapper.appendChild(element)
    wrapper.appendChild(iconDiv)
    wrapper.appendChild(btn)

    console.log(Data)
    console.log(Notes)

    return wrapper;
}

const child = await component()

document.body.appendChild(child);