import EventEmitter from "eventemitter3";
import mqtt from "mqtt/dist/mqtt";

export class MqttClient extends EventEmitter {
    init() {
        const options = {
            clientId: Date.parse(new Date()),
            username: 'admin',
            password: 'public',
        };
        this.mqtt = mqtt.connect('ws://127.0.0.1:8083/mqtt', options);
        this.mqtt.on('connect', (error) => {
            if (error.returnCode === 0) {
                console.log('mqtt connect success');
            } else {
                console.log('mqtt connect fail');
            }
        });
    }

    subscribe() {
        const topic = 'vue/mqtt/demo'
        this.mqtt.subscribe(topic, {qos: 0}, () => {
            console.log('mqtt subscribe ' + topic + ' success');
        });

        this.mqtt.on('message', (topic, payload, packet) => {
            let json = payload.toString();
            console.log('the topic ' + topic + 'receive msg:' + json);
            this.emit('receive_percent',JSON.parse(json).per);
        })
    }
}

export default new MqttClient();
