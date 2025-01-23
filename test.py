import http.server
import ssl

# Define the handler to serve files
handler = http.server.SimpleHTTPRequestHandler

# Create the server
httpd = http.server.HTTPServer(('localhost', 4443), handler)

# Wrap the server with SSL
httpd.socket = ssl.wrap_socket(httpd.socket, keyfile='key.pem', certfile='cert.pem', server_side=True)

print("Serving on https://localhost:4443")
httpd.serve_forever()
