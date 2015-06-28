angular.module('starter.quest', [])

.factory("QuestService", function() {
  var allQuests = allQuests || [];

  return {
    save: function (data) {
      console.log("Saved quest data for " + data.name);
      allQuests.push(data);
    },

    all: function(){
      return allQuests;
    }
  };
});
