const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const { validateBook } = require('../validation/validation');

// GET all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new book
router.post('/', validateBook, async (req, res) => {
  const book = new Book(req.body);
  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT (update) a book
router.put('/:id', validateBook, async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a book
router.delete('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a random book recommendation
router.get('/recommendations', async (req, res) => {
  try {
    const count = await Book.countDocuments();
    const random = Math.floor(Math.random() * count);
    const book = await Book.findOne().skip(random);
    if (!book) return res.status(404).json({ message: 'No books found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT (update) to mark a book as favorite
router.put('/:id/favorite', async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, { isFavorite: true }, { new: true });
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

