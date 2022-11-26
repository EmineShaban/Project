const Meeting = require('../models/Meeting')


exports.create = async (meetingData) => Meeting.create(meetingData)
exports.getAll = () => Meeting.find()



// exports.getOne = (MeetingID) => Meeting.findById(MeetingID)
// exports.getOneDetailed = (MeetingID) => Meeting.findById(MeetingID).populate('author')
// exports.update = (MeetingID, meetingData) => Meeting.updateOne({ _id: MeetingID }, { $set: meetingData }, { runValidators: true })
// exports.delete = (MeetingID) => Meeting.deleteOne({ _id: MeetingID })

// exports.create = async (meetingData) => Meeting.create(meetingData)
