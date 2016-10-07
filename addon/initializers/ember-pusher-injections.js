export function initialize(application) {
  application.injection('controller', 'pusher', 'service:pusher');
  application.injection('route', 'pusher', 'service:pusher');
}

export default {
  name: 'ember-pusher-injections',
  initialize: initialize
};
