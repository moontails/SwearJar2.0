angular.module('starter.quest', [])
.factory("QuestService", function() {
  var allQuests = allQuests || [];

  return {
      save: function (data) {
        allQuests.push(data);
      }
  };
});
