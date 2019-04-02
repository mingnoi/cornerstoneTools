import debugLib from 'debug';

const BASE_SCOPE = 'cornerstoneTools';
const baseLogger = debugLib(BASE_SCOPE);

// TODO: Have webpack set this appropriately
const devMode = true;

/**
 * @method debug
 * Create's a scoped debuging logger
 */

export const getLogger = scope => {
  const log = baseLogger.extend(scope);

  return {
    log,
    // eslint-disable-next-line no-console
    warn: devMode ? console.warn.bind(console) : log,
    // eslint-disable-next-line no-console
    error: console.error.bind(console),
  };
};

/**
 * @method enable
 * @param {string} scope The scope to enabled
 * @returns {void}
 */
export const enable = (scope = `${BASE_SCOPE}:*`) => debugLib.enable(scope);

/**
 * @method disable
 * @param {string} scope
 * @returns {string} The previously enabled scope
 */
export const disable = () => debugLib.disable();
