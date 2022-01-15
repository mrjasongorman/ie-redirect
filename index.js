const destinationURL = "https://www.microsoft.com/en-us/edge";
const statusCode = 301;

async function handleRequest(request) {
  const userAgent = request.headers.get("User-Agent") || "";
  if(userAgent.includes('Trident')) {
    return Response.redirect(destinationURL, statusCode);
  }
  return fetch(request);
}

addEventListener("fetch", async event => {
  event.passThroughOnException(); // any errors will allow requests to go through as normal
  event.respondWith( handleRequest(event.request) )
});
