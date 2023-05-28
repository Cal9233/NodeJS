const Bootcamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');

exports.getBootCamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);

        if(!bootcamp) return next(new ErrorResponse(`Bootcamp not found with Id of ${req.params.id}`, 404));

        res.status(200).json({success: true, data: bootcamp});
    } catch (error) {
        next(new ErrorResponse(`Bootcamp not found with Id of ${req.params.id}`, 404));
    }
};

exports.getBootCampById = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);

        if(!bootcamp) return next(new ErrorResponse(`Bootcamp not found with Id of ${req.params.id}`, 404));

        res.status(200).json({success: true, data: bootcamp});
    } catch (error) {
        next(new ErrorResponse(`Bootcamp not found with Id of ${req.params.id}`, 404));
    }
};

exports.addBootCamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);

        if(!bootcamp) return next(new ErrorResponse(`Bootcamp not found with Id of ${req.params.id}`, 404));

        res.status(200).json({success: true, data: bootcamp});
    } catch (error) {
        next(new ErrorResponse(`Bootcamp not found with Id of ${req.params.id}`, 404));
    }
};

exports.updateBootCamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);

        if(!bootcamp) return next(new ErrorResponse(`Bootcamp not found with Id of ${req.params.id}`, 404));

        res.status(200).json({success: true, data: bootcamp});
    } catch (error) {
        next(new ErrorResponse(`Bootcamp not found with Id of ${req.params.id}`, 404));
    }
};

exports.deleteBootCamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);

        if(!bootcamp) return next(new ErrorResponse(`Bootcamp not found with Id of ${req.params.id}`, 404));

        res.status(200).json({success: true, data: bootcamp});
    } catch (error) {
        next(new ErrorResponse(`Bootcamp not found with Id of ${req.params.id}`, 404));
    }
};