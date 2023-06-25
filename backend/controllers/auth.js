const CalendarEvent = require('../model/inputModel'); 


async function createEvent(req, res) {
  try {
    const { title,start_date,
        end_date,
        description } = req.body; 

    const newEvent = new CalendarEvent({
      title,
      start_date,
      end_date,
      description
    });

    const savedEvent = await newEvent.save();

    res.status(201).json(savedEvent);
  } catch (error) {
    console.error('Error saving event:', error);
    res.status(500).json({ error: 'Failed to save event' });
  }
}

module.exports = {
  createEvent,
};
