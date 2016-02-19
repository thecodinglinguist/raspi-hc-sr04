# raspi-sonar
RaspberryPi - Native Node.js extention to interact with an Ultrasonic Sensor.

Initially stand alone extension written in C++. The end goal is to integrate it into [raspi-io](https://github.com/sesh-kebab/raspi-sonar/new/master?readme=1) IO Plugin for [johnny-five](https://github.com/rwaldron/johnny-five). Specifically to support the pingRead method of an IO plugin, which can't be implemented using javascript alone and requires native code.

Relavant links: 
* [raspi-sonar wiki](https://github.com/sesh-kebab/raspi-sonar/wiki)
* [Johnny-Five Issue #842](https://github.com/rwaldron/johnny-five/issues/842)
* [raspi-io PR 48](https://github.com/nebrius/raspi-io/pull/48)
