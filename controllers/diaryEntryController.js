const DiaryEntry = require('../models/diaryEntry');

exports.getAllEntries = async (req, res) => {
  try {
    const userId = req.userId;
    const entries = await DiaryEntry.findAll(userId);
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch entries', error: error.message });
  }
};

exports.getEntry = async (req, res) => {
  try {
    const { entryId } = req.params;
    const userId = req.userId;
    const entry = await DiaryEntry.findById(entryId, userId);
    res.status(200).json(entry);
  } catch (error) {
    res.status(404).json({ message: 'Diary entry not found', error: error.message });
  }
};

exports.createEntry = async (req, res) => {
  try {
    const { title, description, date, location, photos } = req.body;
    const userId = req.userId;
    const entry = await DiaryEntry.create(title, description, date, location, photos, userId);
    res.status(201).json({ message: 'Diary entry created successfully', entry });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create diary entry', error: error.message });
  }
};

exports.updateEntry = async (req, res) => {
  try {
    const { entryId } = req.params;
    const { title, description, date, location, photos } = req.body;
    const userId = req.userId;
    const entry = await DiaryEntry.update(entryId, { title, description, date, location, photos }, userId);
    res.status(200).json({ message: 'Diary entry updated successfully', entry });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update diary entry', error: error.message });
  }
};

exports.deleteEntry = async (req, res) => {
  try {
    const { entryId } = req.params;
    const userId = req.userId;
    await DiaryEntry.delete(entryId, userId);
    res.status(200).json({ message: 'Diary entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete diary entry', error: error.message });
  }
};
