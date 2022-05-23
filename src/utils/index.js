
async function fetchFunc(url, params = '', setState) {

    await fetch(('http://localhost:7070/api/' + url + params).trim())
        .then(res => res.json())
        .then(setState);
}



const toggleActiveClass = (e) => {
    const target = e.target;
    const elements = target.parentNode.parentNode.childNodes;
    elements.forEach(item => item.childNodes[0].classList.remove('active'))
    target.classList.add('active');
}



export { fetchFunc, toggleActiveClass };


