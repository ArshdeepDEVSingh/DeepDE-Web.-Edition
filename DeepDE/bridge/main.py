from flask import Flask, jsonify
from flask_cors import CORS
import psutil

app = Flask(__name__)
CORS(app)

@app.route("/stats")
def stats():
  return jsonify({
    "cpu" : psutil.cpu_percent(interval=0.2),
    "ram" : psutil.virtual_memory().percent,
    "disk" : psutil.disk_usage("/").percent
  })

if __name__ == "__main__":
  app.run(port=5174)