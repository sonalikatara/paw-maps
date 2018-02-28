/**
 * Geolocation API access
 * Geolocation requests are sent using POST to the following URL:
 * https://www.googleapis.com/geolocation/v1/geolocate?key=<YOUR_KEY>
 */
const GEOLOCATION_OPTIONS = {
  method: 'POST',
  hostname: 'www.googleapis.com',
  port: null,
  path: `/geolocation/v1/geolocate?key=${GOOGLE_API_KEY}`,
  headers: {
    'content-type': 'application/json',
    'cache-control': 'no-cache',
  },
};

/**
 * @description Hanlder for Geolocation API call
 *
 * @api {GET} /map/geolocation
 * @apiSuccess 200 {JSON} 'location': estimated 'lat' and 'lng'; 'accuracy': accuracy of
 *   the estimated location, in meters.
 * @apiError 400 {request error} Google api request error.
 */
exports.getGeolocation = (appReq, appRes) => {
    const req = http.request(GEOLOCATION_OPTIONS, (res) => {
    const chunks = [];

    res.on('data', (chunk) => {
      chunks.push(chunk);
    });

    res.on('end', () => {
      const body = Buffer.concat(chunks);
      appRes.status(200).send(JSON.parse(body.toString()));
    });
  }).on('error', (err) => {
    appRes.send(err);
  });

  req.write(JSON.stringify({}));
  req.end();
};
