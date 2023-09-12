let url = new URL(location.href)
let params =new URLSearchParams(url.search)
let id = params.get('id')
console.log(id);
