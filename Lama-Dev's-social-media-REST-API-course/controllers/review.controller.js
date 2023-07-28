import createError from "../utils/createError.js";
import Review from "../models/review.model.js";
import Business from "../models/business.model.js";

export const createReview = async (req, res, next) => {
  if (req.isBusinessOwner)
    return next(createError(403, "Business owners can't create a review!"));

  const newReview = new Review({
    userId: req.userId,
    businessId: req.body.businessId,
    desc: req.body.desc,
    star: req.body.star,
  });

  try {
    const review = await Review.findOne({
      businessId: req.body.businessId,
      userId: req.userId,
    });

    if (review)
      return next(
        createError(403, "You have already created a review for this business!")
      );

    const savedReview = await newReview.save();

    await Business.findByIdAndUpdate(req.body.businessId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });
    res.status(201).send(savedReview);
  } catch (err) {
    next(err);
  }
};

export const getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find({ businessId: req.params.businessId });
    res.status(200).send(reviews);
  } catch (err) {
    next(err);
  }
};
export const deleteReview = async (req, res, next) => {
    try {
        const review = await Review.findById(req.params.id);
        console.log(req.userId)
        console.log(review.userId)
        if (req.userId !== review.userId) {
            return next(createError(403, "You can delete only your own reviews!"));
        }
        await Review.findByIdAndDelete(req.params.id);
        res.status(200).send("Profile Deleted.");
        next(err);
        
    } catch (err) {
        next(err)
    }
};
// {
//     "businessId":"64c2ea528623bafc247ebfe4",
//     "star":5,
//     "desc":"Testing 123"
// }
