function createNode(elem) {
    return document.createElement(elem)
}

function append(parent, elem) {
    return parent.appendChild(elem)
}

const ul = document.getElementById('people')

fetch(`https://jsonplaceholder.typicode.com/users`).then(resp => resp.json()).then(data => {
    let people = data
    return people.map(function (person) { 
        let li = createNode('li'),
            span = createNode('span')
        
        li.innerHTML = person.name
        span.innerHTML = person.email
        
        append(li, span)
        append(ul,li)
        
    })
})