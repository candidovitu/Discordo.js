const request = require('request');
const auth = require('./login');


Object.prototype.edit = function(content){
    return new Promise((resolve, reject) => {
            if(!content) return process.emitWarning('Message cannot be empty', 'DiscordAPIError');
            var options = {
                uri: `https://discordapp.com/api/channels/${this.channel_id}/messages/${this.id}`,
                method: 'PATCH',
                json: {
                    "content": content
                },
                headers: {
                    'Authorization': `Bot ${auth.get()}`,
                    'Content-type': 'application/json'
                }
            };
        
            request(options, (err,res)=>{
                if(err || res.statusCode != 200) return reject(JSON.parse(res.body));
                resolve(JSON.parse(res.body));
            });
    });
}

module.exports = edit;