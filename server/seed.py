from app import app
from datetime import date
from models import db, User, Date, Cat, UserCat

with app.app_context():

    print("Deleting data ... ")
    User.query.delete()
    Date.query.delete()
    UserCat.query.delete()
    Cat.query.delete()

    print("Creating Users ... ")
    u1 = User(username = 'john', email = 'john@gmail.com', password = 'password')
    u2 = User(username = 'jane', email = 'jane@gmail.com', password = 'password')
    u3 = User(username = 'bob', email = 'bobda@gmail.com', password = 'password')

    users = [u1, u2, u3]
    db.session.add_all(users)
    db.session.commit()

    print("Creating Dates ... ")
    d1 = Date(day = date(2023, 4, 23), steps = 2000, user_id = u1.id)
    d2 = Date(day = date(2023, 4, 23), steps = 3000, user_id = u2.id)
    d3 = Date(day = date(2023, 4, 23), steps = 4000, user_id = u3.id)
    d4 = Date(day = date(2023, 4, 24), steps = 5000, user_id = u1.id)
    d5 = Date(day = date(2023, 4, 24), steps = 6000, user_id = u2.id)
    d6 = Date(day = date(2023, 4, 24), steps = 7000, user_id = u3.id)

    # d1 = Date(day = 20230423, steps = 2000, user_id = u1.id)
    # d2 = Date(day = 20230423, steps = 3000, user_id = u2.id)
    # d3 = Date(day = 20230423, steps = 4000, user_id = u3.id)
    # d4 = Date(day = 20230424, steps = 5000, user_id = u1.id)
    # d5 = Date(day = 20230424, steps = 6000, user_id = u2.id)
    # d6 = Date(day = 20230424, steps = 7000, user_id = u3.id)

    dates = [d1, d2, d3, d4, d5, d6]
    db.session.add_all(dates)
    db.session.commit()

    print('Creating Cats ... ')
    c1 = Cat(name = 'black1', image = '../client/assets/cats/black1.png', description = 'black cat', )
    c2 = Cat(name = 'black2', image = '../client/assets/cats/black2.png', description = 'black cat with green eyes', )
    c3 = Cat(name = 'calico', image = '../client/assets/cats/calico.png', description = 'calico cat', )

    cats = [c1, c2, c3]
    db.session.add_all(cats)
    db.session.commit()

    print('Creating Cat Owners ... ')
    uc1 = UserCat(user_id = u1.id, cat_id = c1.id)
    uc2 = UserCat(user_id = u2.id, cat_id = c1.id)
    uc3 = UserCat(user_id = u2.id, cat_id = c2.id)
    uc4 = UserCat(user_id = u3.id, cat_id = c1.id)
    uc5 = UserCat(user_id = u3.id, cat_id = c2.id)
    uc6 = UserCat(user_id = u3.id, cat_id = c3.id)

    usercats = [uc1, uc2, uc3, uc4, uc5, uc6]
    db.session.add_all(usercats)
    db.session.commit()

    print("seeding done")