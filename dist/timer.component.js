"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.to-string.js");

var _react = require("react");

const Timer = _ref => {
  let {
    setRef
  } = _ref;
  // [ Internal state ]
  const [time, setTime] = (0, _react.useState)(0);
  const [isRunning, setIsRunning] = (0, _react.useState)(false);
  const [display, setDisplay] = (0, _react.useState)('00:00');
  const interval = 1000;
  let internalTime = time; // [ Methods ]
  // Tick

  const tick = () => {
    internalTime = internalTime + 1;
    setTime(internalTime);
  }; // Tock


  const tock = intervalId => {
    clearInterval(intervalId);
  }; // Convert time to text


  const convertTimeToText = () => {
    const sec = (time % 60).toString();
    const min = Math.floor(time / 60).toString();
    return "".concat(min.padStart(2, '0'), ":").concat(sec.padStart(2, '0'));
  }; // Start


  const start = () => {
    setIsRunning(true);
  }; // Pause


  const pause = () => {
    setIsRunning(false);
  }; // Reset


  const reset = () => {
    setIsRunning(false);
    setTime(0);
  }; // isRunning status


  const getIsRunning = () => {
    return isRunning;
  }; // [ Reference object ]


  (0, _react.useEffect)(() => {
    if (setRef) {
      setRef({
        start,
        pause,
        reset,
        isRunning: getIsRunning
      });
    }
  }, []); // Timer effect

  (0, _react.useEffect)(() => {
    if (isRunning) {
      const intervalId = setInterval(tick, interval);
      return () => tock(intervalId);
    }
  }, [isRunning]);
  (0, _react.useEffect)(() => {
    setDisplay(convertTimeToText());
  }, [time]);
  return /*#__PURE__*/React.createElement("div", null, display);
};

var _default = Timer;
exports.default = _default;