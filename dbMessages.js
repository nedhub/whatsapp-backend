const db = require('mongoose');



const whatsappSchema=db.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean,
});




// module.exports db.model('messageContent', whatsappSchema);


// const f = db.model('messageContent', whatsappSchema);

// module.exports = f;
const Message = db.model('messageContent', whatsappSchema);

// module.exports = db.model('messageContent', whatsappSchema);