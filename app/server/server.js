Post=new Meteor.Collection("posts");

Post.allow({
  insert:function(userId,doc){
    return userId&&(doc.user._id===userId);
  }
});
