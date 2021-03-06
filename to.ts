import {Callback} from './shared';

function toCallback<T>(promise: PromiseLike<T>, cb: Callback<T>): void {
  promise.then(
    result => cb(null, result),
    err => cb(err, null)
  ).then(null, err => {
    // Don't swallow thrown errors
    setTimeout(() => {
      throw err;
    }, 0);
  });
}

export default toCallback;
