from flask import Flask, jsonify, send_from_directory
from database import load_jobs_from_db

api = Flask(__name__, static_url_path='/static')

@api.route('/profile')
def my_profile():
    response_body = {
        "name": "git gud",
        "about" :"Justwanttogetin project"
    }

    return response_body

@api.route('/list_jobs')
def list_jobs():
    jobs = load_jobs_from_db()
    return jsonify(jobs)

@api.route('/pdfs/<path:path>')
def send_report(path):
    return send_from_directory('reports', path)

if __name__ == '__main__':
    api.run(host='0.0.0.0', debug=True)
