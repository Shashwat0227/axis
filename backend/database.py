from sqlalchemy import create_engine, text

engine = create_engine("mariadb+pymysql://parzival:AnabYgpcbi&+)+@localhost/axis?charset=utf8mb4")
def load_jobs_from_db():
    with engine.connect() as conn:
        result = conn.execute(text("select * from jobs"))
        dict_jobs = []
        for row in result.all():
                dict_jobs.append(row._asdict())
        return dict_jobs
    
