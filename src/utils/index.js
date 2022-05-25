
async function fetchFunc(url, params = '', setState) {

    await fetch(('http://localhost:7070/api/' + url + params).trim())
        .then(res => res.json())
        .then(setState);
}



const toggleActiveClass = (e) => {
    const target = e.target;
    const elements = target.parentNode.parentNode.childNodes;
    console.log(elements)
    elements.forEach(item => item.childNodes[0].classList.remove('active'))
    target.classList.add('active');
}

const fetchPost = async (data, str, strCatch = null) => {

    const req = await fetch('http://localhost:7070/api/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if (!req.ok) return strCatch ?? 'Данные не были отправлены';
    return str;
}



const fetchOffsetShow = async (params, setStateItems, stateCountOffset, setStateCountOffset) => {
    await fetch('http://localhost:7070/api/items' + (params ? `?categoryId=${params}&offset=${stateCountOffset}` : `?offset=${stateCountOffset}`))
        .then(res => res.json())
        .then(setStateItems)
        .then(setStateCountOffset(stateCountOffset + 6));
}



export { fetchFunc, toggleActiveClass, fetchPost, fetchOffsetShow };


