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
    u1 = User(username = 'min', email = 'min@gmail.com', password = 'password')
    u2 = User(username = 'jane', email = 'jane@gmail.com', password = 'password')
    u3 = User(username = 'bob', email = 'bobda@gmail.com', password = 'password')

    users = [u1, u2, u3]
    db.session.add_all(users)
    db.session.commit()

    print("Creating Dates ... ")
    # d1 = Date(day = date(2023, 4, 23), steps = 2000, user_id = u1.id)
    # d2 = Date(day = date(2023, 4, 23), steps = 3000, user_id = u2.id)
    # d3 = Date(day = date(2023, 4, 23), steps = 4000, user_id = u3.id)
    # d4 = Date(day = date(2023, 4, 24), steps = 5000, user_id = u1.id)
    # d5 = Date(day = date(2023, 4, 24), steps = 6000, user_id = u2.id)
    # d6 = Date(day = date(2023, 4, 24), steps = 7000, user_id = u3.id)

    d1 = Date(day = "2023-4-23", steps = 2000, user_id = u1.id)
    d2 = Date(day = "2023-4-23", steps = 3000, user_id = u2.id)
    d3 = Date(day = "2023-4-23", steps = 4000, user_id = u3.id)
    d4 = Date(day = "2023-4-24", steps = 5000, user_id = u1.id)
    d5 = Date(day = "2023-4-24", steps = 6000, user_id = u2.id)
    d6 = Date(day = "2023-4-24", steps = 7000, user_id = u3.id)

    dates = [d1, d2, d3, d4, d5, d6]
    db.session.add_all(dates)
    db.session.commit()


    print('Creating Cats ... ')
    c1 = Cat(name = 'black1', image = './Cats/black1.png', description = 'black cat', )
    c2 = Cat(name = 'black2', image = './Cats/black2.png', description = 'black cat with green eyes', )
    c3 = Cat(name = 'black3', image = './Cats/black3.png', description = 'calico cat', )
    c4 = Cat(name = 'black4', image = './Cats/black4.png', description = '')
    c5 = Cat(name = 'black5', image = './Cats/black5.png', description = '')
    c6 = Cat(name = 'blue1', image = './Cats/blue1.png', description = '')
    c7 = Cat(name = 'blue2', image = './Cats/blue2.png', description = '')
    c8 = Cat(name = 'blue3', image = './Cats/blue3.png', description = '')
    c9 = Cat(name = 'blue4', image = './Cats/blue4.png', description = '')
    c10 = Cat(name = 'brown1', image = './Cats/brown1.png', description = '')
    c11 = Cat(name = 'brown2', image = './Cats/brown2.png', description = '')
    c12 = Cat(name = 'brown3', image = './Cats/brown3.png', description = '')
    c13 = Cat(name = 'brown4', image = './Cats/brown4.png', description = '')
    c14 = Cat(name = 'brown5', image = './Cats/brown5.png', description = '')
    c15 = Cat(name = 'brown6', image = './Cats/brown6.png', description = '')
    c16 = Cat(name = 'brown7', image = './Cats/brown7.png', description = '')
    c17 = Cat(name = 'brown8', image = './Cats/brown8.png', description = '')
    c18 = Cat(name = 'brown9', image = './Cats/brown9.png', description = '')
    c19 = Cat(name = 'calico', image = './Cats/calico.png', description = '')
    c20 = Cat(name = 'cottoncandy_blue', image = './Cats/cottoncandy_blue.png', description = '')
    c21 = Cat(name = 'cottoncandy_pink', image = './Cats/cottoncandy_pink.png', description = '')
    c22 = Cat(name = 'cream1', image = './Cats/cream1.png', description = '')
    c23 = Cat(name = 'cream2', image = './Cats/cream2.png', description = '')
    c24 = Cat(name = 'dark', image = './Cats/dark.png', description = '')
    c25 = Cat(name = 'gameboy1', image = './Cats/gamboy1.png', description = '')
    c26 = Cat(name = 'gameboy2', image = './Cats/gamboy2.png', description = '')
    c27 = Cat(name = 'gameboy3', image = './Cats/gamboy3.png', description = '')
    c28 = Cat(name = 'ghost', image = './Cats/ghost.png', description = '')
    c29 = Cat(name = 'gold', image = './Cats/gold.png', description = '')
    c30 = Cat(name = 'gray1', image = './Cats/gray1.png', description = '')
    c31 = Cat(name = 'gray2', image = './Cats/gray2.png', description = '')
    c32 = Cat(name = 'gray3', image = './Cats/gray3.png', description = '')
    c33 = Cat(name = 'hairless1', image = './Cats/hairless1.png', description = '')
    c34 = Cat(name = 'hairless2', image = './Cats/hairless2.png', description = '')
    c35 = Cat(name = 'indigo', image = './Cats/indigo.png', description = '')
    c36 = Cat(name = 'orange1', image = './Cats/orange1.png', description = '')
    c37 = Cat(name = 'orange2', image = './Cats/orange2.png', description = '')
    c38 = Cat(name = 'orange3', image = './Cats/orange3.png', description = '')
    c39 = Cat(name = 'orange4', image = './Cats/orange4.png', description = '')
    c40 = Cat(name = 'peach', image = './Cats/peach.png', description = '')
    c41 = Cat(name = 'radioactive', image = './Cats/radioactive.png', description = '')
    c42 = Cat(name = 'red1', image = './Cats/red1.png', description = '')
    c43 = Cat(name = 'red2', image = './Cats/red2.png', description = '')
    c44 = Cat(name = 'sealpoint', image = './Cats/sealpoint.png', description = '')
    c45 = Cat(name = 'teal', image = './Cats/teal.png', description = '')
    c46 = Cat(name = 'white', image = './Cats/white.png', description = '')
    c47 = Cat(name = 'whitegray1', image = './Cats/whitegray1.png', description = '')
    c48 = Cat(name = 'whitegray2', image = './Cats/whitegray1.png', description = '')
    c49 = Cat(name = 'yellow', image = './Cats/.png', description = '')

    cats = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49]
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