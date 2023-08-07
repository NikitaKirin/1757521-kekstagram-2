const filterConfigs = {
  default: {
    range: {
      min: 0,
      max: 100,
    },
    start: 0,
    step: 1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  },
  chrome: {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    start: 1,
    format: {
      to: function (value) {
        return `${value.toFixed(1)}`;
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  },
  sepia: {
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    start: 1,
    format: {
      to: function (value) {
        return `${value.toFixed(1)}`;
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  },
  marvin: {
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    start: 100,
    format: {
      to: function (value) {
        return `${value.toFixed(0)}%`;
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  },
  phobos: {
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    start: 3,
    format: {
      to: function (value) {
        return `${value.toFixed(1)}px`;
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  },
  heat: {
    range: {
      min: 1,
      max: 3,
    },
    step: 0.1,
    start: 3,
    format: {
      to: function (value) {
        return `${value.toFixed(1)}`;
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  },
};

export {filterConfigs};
