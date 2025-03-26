export default function handler(req, res) { 
  if (req.headers["hx-request"]) { 
    res.send(` 
      <div class="text-green-600"> 
        ✅ HTMX works! Serverless response at ${new Date().toLocaleTimeString()} 
      </div> 
    `); 
  } else { 
    res.send("This is an HTMX endpoint."); 
  } 
} 
