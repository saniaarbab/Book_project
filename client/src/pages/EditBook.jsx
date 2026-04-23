import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getBookById, updateBook } from '../services/api'

function EditBook() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')
  const [year, setYear] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // ✅ Fetch existing book data (pre-fill form)
  useEffect(() => {
    getBookById(id)
      .then(data => {
        setTitle(data.title || '')
        setAuthor(data.author || '')
        setGenre(data.genre || '')
        setYear(data.year || '')
        setDescription(data.description || '')
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault()

    const updatedData = {
      title,
      author,
      genre,
      year,
      description
    }

    try {
      await updateBook(id, updatedData)
      navigate(`/books/${id}`) // go back to detail page
    } catch (err) {
      alert('Failed to update: ' + err.message)
    }
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>

  return (
    <div>
      <Link to={`/books/${id}`}>← Back</Link>
      <h2>Update Book</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />

        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          type="submit"
          style={{
            background: '#38a169',
            color: 'white',
            padding: '8px 16px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default EditBook