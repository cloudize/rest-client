function GetJsonAPIHeaders() {
  return {
    'Content-Type': 'application/vnd.api+json',
  };
}

function GetJsonAPIErrorsPayload(statusCode, errorCodes) {
  const payload = {
    jsonapi: {
      version: '1.0',
    },
    errors: [],
  };

  // eslint-disable-next-line no-restricted-syntax
  for (const errorCode of errorCodes) {
    payload.errors.push({
      status: errorCode.toString(10),
      code: `ERROR-${errorCode.toString(10)}`,
      title: `This is the detail of the ${errorCode.toString(10)} error.`,
    });
  }

  return payload;
}

module.exports = {
  GetJsonAPIHeaders,
  GetJsonAPIErrorsPayload,
};
