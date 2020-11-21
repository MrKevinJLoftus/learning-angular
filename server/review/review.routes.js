const express = require('express');
const reviewController = require('./review.controller');
const router = express.Router();

router.post('/review', reviewController.createNewReview);
router.get('/review/:id', reviewController.getReviewById);
router.get('/reviews', reviewController.getAllReviews);
router.delete('/review/:id', reviewController.deleteReviewById);
router.patch('/review/:id', reviewController.updateReviewById);
