from flask import Flask, jsonify
from database import load_jobs_from_db

api = Flask(__name__)

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

if __name__ == '__main__':
    api.run(host='0.0.0.0', debug=True)
