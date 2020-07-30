const resolve = function(self, val) {
    self._state = 1;
    self._val = val;
    handler(self);
}

const reject = function (self, err) {
    self._state = 2;
    self._val = err;
    handler(self);
}

const handler = function (self) {
    if (self._defferedState === 1) {
        if (self._state === 1) {
            resolve(self._defferds, self.onFullfilled(self._val));
        }
        if (self._state === 2) {
            reject(self._defferds, self.onRejected(self._val));
        }
    }
}

function Promise (fn) {
    this._defferedState = 0;
    this._state = 0;
    this._val = null;
    this.onFullfilled = null;
    this.onRejected = null;
    this._defferds = null;
    fn((val) => {
        resolve(this, val);
    }, (err) => {
        reject(this, err);
    });
}

Promise.prototype.then = function (onSuccess, onFail) {
    this._defferedState = 1;
    this.onFullfilled = onSuccess;
    this.onRejected = onFail;
    this._defferds = new Promise(() => {});
    handler(this);
    return this._defferds;
}
