from flask import Flask

api = Flask(__name__)

@api.route('/profile')
def my_profile():
    response_body = {
        "name": "git gud",
        "about" :"Justwanttogetin project"
    }

    return response_body
