const express = require('express');
const router = express.Router();
const diaryEntryController = require('../controllers/diaryEntryController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware.authenticate, diaryEntryController.getAllEntries);
router.get('/:entryId', authMiddleware.authenticate, diaryEntryController.getEntry);
router.post('/', authMiddleware.authenticate, diaryEntryController.createEntry);
router.put('/:entryId', authMiddleware.authenticate, diaryEntryController.updateEntry);
router.delete('/:entryId', authMiddleware.authenticate, diaryEntryController.deleteEntry);

module.exports = router;
