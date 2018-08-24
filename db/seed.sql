create table helousers(
    id serial primary key,
    username varchar(20),
    password varchar(20),
    profile_pic text
)
Insert into helousers(username, password, profile_pic) 
    values  ('dennis', 'dvl', 'img1.jpg'),
            ('diezel', 'dzl', 'img2.jpg'),
            ('gio',    'gio', 'img3.jpg')


create table heloposts(
    id serial primary key,
    title varchar(45),
    img text,
    content text,
    author_id integer references users(id)
)
insert into heloposts(title, img, content, author_id) 
    values  ('Mountain', 'alps.jpg', 'Mt. Fuji', '1'),
            ('River', 'amazon.jpg', 'Amazon River', '1')

-- join posts table to users table
select u.username, u.profile_pic
from helousers u 
join heloposts p on u.id=p.author_id;

insert into helousers(username, password, profile_pic) values($1, $2, $3) returning *;

insert into heloposts(title, img, content, author_id) values($1, $2, $3, $4) returning *;

select * from helousers as u JOIN heloposts as p on u-id=p.author_id where title like $1;

select p.title, p.img, p.content, u.username, u.propfile_pic from users as u JOIN 
posts as p on u.id = p.author_id where p.id =$1;

select * from helousers where username=$1 and PASSWORD=$2;

