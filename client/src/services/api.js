const BASE = 'http://localhost:5000/api/books'

// GET all books
export async function getAllBooks() {
  const res = await fetch(BASE)
  if (!res.ok) throw new Error("Failed to fetch books")
  return res.json()
}

// GET single book
export async function getBookById(id) {
  const res = await fetch(`${BASE}/${id}`)
  if (!res.ok) throw new Error("Book not found")
  return res.json()
}

// CREATE book
export async function createBook(data) {
  const res = await fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (!res.ok) throw new Error("Failed to create book")
  return res.json()
}

// UPDATE book
export async function updateBook(id, data) {
  const res = await fetch(`${BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (!res.ok) throw new Error("Failed to update book")
  return res.json()
}

// DELETE book
export async function deleteBook(id) {
  const res = await fetch(`${BASE}/${id}`, {
    method: 'DELETE'
  })
  if (!res.ok) throw new Error("Failed to delete book")
  return res.json()
}