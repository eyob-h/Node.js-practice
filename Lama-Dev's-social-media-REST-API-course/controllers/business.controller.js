import Business from "../models/business.model.js";
import createError from "../utils/createError.js";

//create business
export const createBusiness = async (req, res, next) => {
    console.log(req.isBusinessOwner)
    if (req.isBusinessOwner=="false")
    // console.log(req.params.isBusinessOwner)
    // console.log(req.params.username)
    return next(createError(403, "Only business owners can create a business!"));

  const newBusiness = new Business({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedBusiness = await newBusiness.save();
    res.status(201).json(savedBusiness);
  } catch (err) {
    next(err);
  }
};

//delete business
export const deleteBusiness = async (req, res, next) => {
  try {
    const business = await Business.findById(req.params.id);
    if (business.userId !== req.userId)
      return next(createError(403, "You can delete only your business!"));

    await Business.findByIdAndDelete(req.params.id);
    res.status(200).send("Business has been deleted!");
  } catch (err) {
    next(err);
  }
};

//view business
export const getBusiness = async (req, res, next) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) next(createError(404, "Business not found!"));
    res.status(200).send(business);
  } catch (err) {
    next(err);
  }
};

//FILTER AND SEARCH
export const getBusinesses = async (req, res, next) => {
    console.trace();
  const q = req.query;
  const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.category && { category: q.category }),
    // ...((q.min || q.max) && {
    //   price: {
    //     ...(q.min && { $gt: q.min }),
    //     ...(q.max && { $lt: q.max }),
    //   },
    // }),
    // ...(q.search && { description: { $regex: q.search, $options: "i" } }),
    // ...(q.search && {
    //     name: { $regex: q.search, $options: "i" },
    //     description: { $regex: q.search, $options: "i" },
    //   }),
      //============== Searches both the business names and category
      $or: [
        { name: { $regex: q.search || "", $options: "i" } },
        { description: { $regex: q.search || "", $options: "i" } },
      ],
      
      //===================
    // ...(q.search && { description: { $regex: q.search, $options: "i" } }),
  };
  try {
    const biz = await Business.find(filters).sort({ [q.sort]: -1 });
    res.status(200).send(biz);
  } catch (err) {
    next(err);
  }
};