const BASE_URL = "http://localhost:3000/";

async function get(resource) {
  const resposta = await fetch(BASE_URL + resource);

  return resposta;
}

async function post(resource, data) {
  const resposta = await fetch(BASE_URL + resource, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  });

  return await resposta;
}

async function put(resource, data) {
  const resposta = await fetch(BASE_URL + resource, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  });
  return resposta.json();
}

async function del(resource) {
  const resposta = await fetch(BASE_URL + resource, {
    method: "DELETE",
  });

  return resposta.json();
}

module.exports =  { post, get, del, put };
