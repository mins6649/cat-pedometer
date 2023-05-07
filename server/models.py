from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy

db = SQLAlchemy()

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    user_cats = db.relationship('UserCat', backref='user',)
    dates = db.relationship('Date', backref='user')

    serialize_rules = ('-user_cats.user', '-dates.user', '-created_at', '-updated_at')

    cats = association_proxy('user_cats', 'cat')


class Date(db.Model, SerializerMixin):
    __tablename__ = 'dates'

    id = db.Column(db.Integer, primary_key=True)
    # day = db.Column(db.Date)
    day = db.Column(db.String)
    steps = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    serialize_rules = ('-user.dates', '-created_at', '-updated_at')


#CAT TABLE FOR EACH OF THE FIFTY CATS?
class Cat(db.Model, SerializerMixin):
    __tablename__ = 'cats'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    image = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    user_cats = db.relationship('UserCat', backref='cat',)

    serialize_rules = ('-user_cats.cat', '-created_at', '-updated_at')

    users = association_proxy('user_cats', 'user')

#Joiner Table: USER-CAT
class UserCat(db.Model, SerializerMixin):
    __tablename__ = 'user_cats'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    cat_id = db.Column(db.Integer, db.ForeignKey('cats.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    serialize_rules = ('-user.user_cats', '-cat.user_cats', '-created_at', '-updated_at')

# # Joiner Table: USER-DATE
# class DailyStep(db.Model, SerializerMixin):
#     __tablename__ = 'daily_steps'

#     id = db.Column(db.Integer, primary_key=True)
#     steps = db.Column(db.Integer)

#     user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
#     date_id = db.Column(db.Integer, db.ForeignKey('dates.id'))
    



