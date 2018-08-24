module.exports = {
  login: (req, res, next) => {
    let dbInstance = req.app.get("db");
    let { username, password } = req.body;

    dbInstance
      .verifyUser([username, password])
      .then(response => {
        res.status(202).send(response[0]);
      })
      .catch(err => res.status(404).send(err));
  },
  register: (req, res, next) => {
    let dbInstance = req.app.get("db");
    let { username, password } = req.body;
    
    dbInstance
      .createUser([username, password, profile_pic])
      .then(response => {
        res.status(202).send(response[0]);
      })
      .catch(err => res.status(404).send(err));
  },

  createUserPosts: (req, res, next) => {
    let { userid } = req.params;
    let { title, img, content } = req.body;
    userid = +userid;

    let dbInstance = req.app.get("db");
    dbInstance
      .createUserPost([title, img, content, userid])
      .then(response => {
        res.status(202).send(response);
      })
      .catch(err => res.status(404).send(err));
  },
  getSinglePost: (req, res, next) => {
    let { postid } = req.params;
    postid = +postid;

    let dbInstance = req.app.get("db");
    dbInstance
      .getSinglePost([postid])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(err => res.status(404).send(err));
  }
};
