import axios from 'axios';

const discordHook = () => {

    const page = window.location.pathname;

    const formData = {
        "username": "Page Hit Bot",
        "content": page,
    }

    axios.post('https://discord.com/api/webhooks/794043455449727047/LUjnu45CmAQfMcFJoy98097wR3jiXRF3m2so3mLE6zD4nIMQxO11gZ0NJyAbJeYZEB9j', {
        "name": "test webhook",
        "type": 1,
        "channel_id": "199737254929760256",
        "token": "3d89bb7572e0fb30d8128367b3b1b44fecd1726de135cbe28a41f8b2f777c372ba2939e72279b94526ff5d1bd4358d65cf11",
        "avatar": null,
        "guild_id": "199737254929760256",
        "id": "223704706495545344",
        "user": {
            "username": "test",
            "discriminator": "7479",
            "id": "190320984123768832",
            "avatar": "b004ec1740a63ca06ae2e14c5cee11f3"
        },
        "username": "Page Hit Bot",
        "content": page,
    })
    .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
}

export default discordHook;