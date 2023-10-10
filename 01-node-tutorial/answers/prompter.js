const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let daysLeft = 'Let\'s find out how many days until your birthday!';

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body>
  <h4>How Many Days Until Your Birthday?</h4>
  <form method="POST">
  <select name="bd_month" id="bd_month">
    <option value="0">January</option>
    <option value="1">February</option>
    <option value="2">March</option>
    <option value="3">April</option>
    <option value="4">May</option>
    <option value="5">June</option>
    <option value="6">July</option>
    <option value="7">August</option>
    <option value="8">September</option>
    <option value="9">October</option>
    <option value="10">November</option>
    <option value="11">December</option>
  </select>
  <select name="bd_day" id="bd_day">
    <option value="1">1 </option>
    <option value="2">2 </option>
    <option value="3">3 </option>
    <option value="4">4 </option>
    <option value="5">5 </option>
    <option value="6">6 </option>
    <option value="7">7 </option>
    <option value="8">8 </option>
    <option value="9">9 </option>
    <option value="10">10 </option>
    <option value="11">11 </option>
    <option value="12">12 </option>
    <option value="13">13 </option>
    <option value="14">14 </option>
    <option value="15">15 </option>
    <option value="16">16 </option>
    <option value="17">17 </option>
    <option value="18">18 </option>
    <option value="19">19 </option>
    <option value="20">20 </option>
    <option value="21">21 </option>
    <option value="22">22 </option>
    <option value="23">23 </option>
    <option value="24">24 </option>
    <option value="25">25 </option>
    <option value="26">26 </option>
    <option value="27">27 </option>
    <option value="28">28 </option>
    <option value="29">29 </option>
    <option value="30">30 </option>
    <option value="31">31 </option>
  </select>
  <button type="submit">Submit</button>
  </form>
  <p>${daysLeft}</p>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // here, you can add your own logic
      const today = new Date();
      const bd_month = parseInt(body["bd_month"]);
      const bd_day = parseInt(body["bd_day"]);

      const birthday = new Date(today.getFullYear(), bd_month, bd_day);

      const timeDifference = birthday - today;
      const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

      if (days < 0) {
        daysLeft = `Hooray!!! There are just ${365 + days} days until your birthday!`;
      } else {
        daysLeft = `Hooray!!! There are just ${days} days until your birthday!`;
      }

      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.listen(3000);
console.log("The server is listening on port 3000.");

server.on('request', (req) => {
  console.log("event received: ", req.method, req.url)
})
