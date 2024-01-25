const BASE_URL = `http://localhost:8080`;
async function handleResponse(res) {
  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }

  try {
    return await res.json();
  } catch (error) {
    throw new Error("Failed to parse JSON response");
  }
}

export async function getAuthorData(authorID) {
  const res = await fetch(`${BASE_URL}/author/${authorID}`);
  return handleResponse(res);
}

export async function getAuthorsData() {
  const res = await fetch(`${BASE_URL}/author`);
  return handleResponse(res);
}

export async function getWorksData() {
  const res = await fetch(`${BASE_URL}/works`);
  return handleResponse(res);
}

export async function getWorkData(workID) {
  const res = await fetch(`${BASE_URL}/works/${workID}`);
  
  return handleResponse(res);
}

export async function getWorkFullInfo(workID) {
  const res = await fetch(`${BASE_URL}/works/full/${workID}`);
  return handleResponse(res);
}

export async function getRoles() {
  const res = await fetch(`${BASE_URL}/roles`);
  return handleResponse(res);
}
