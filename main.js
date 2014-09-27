#!/usr/bin/env node

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test_db');
//�R���N�V�����̃X�L�[�}
user_scheme = {
  name : String,
  age : Number
};

User = mongoose.model('test_collection', new mongoose.Schema(user_scheme) );

//�v�f�̒ǉ�
item = new User();
item.name = "mizchi";
item.age = 23;
item.save(function(e){
  // �|�X�g�������̃R�[���o�b�N�֐�
  console.log('add new user:'+JSON.stringify(item));

});

User.find({}, function(err, docs) {
    for (i=0;i<docs.length;i++) {
        console.log("NAME:" + docs[i].name + ",AGE:" + docs[i].age);
    }
});




