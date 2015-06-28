angular.module('starter.quest', [])

.factory("QuestService", function() {
  var allQuests = allQuests || [{
    ID:0,
    name: 'Jan',
    target: 'Bala',
    supporter: 'You, Me or Hum',
    amount: '15',
    penalty: '1',
    duration: '30',
    count: 0
  },
  {
    ID:1,
    name: 'Feb',
    target: 'Shiva',
    supporter: 'Bala, Me or You',
    amount: '25',
    penalty: '0.5',
    duration: '7',
    count: 0
  },
  {
    ID:2,
    name: 'Dec',
    target: 'Naruto',
    supporter: 'Shiva, Bala or Hum',
    amount: '45',
    penalty: '1',
    duration: '14',
    count: 0
  }];

  return {
    save: function (data) {
      console.log("Saved quest data for " + data.name);
      data.ID = allQuests.length + 1;
      data.count = 0,
      allQuests.push(data);
    },

    all: function () {
      console.log("Hi");
      return allQuests;
    },

    addcount: function(quest) {
      console.log("Add");
      allQuests[parseInt(quest.ID)].count += 1;

      return allQuests;
    }
  };
});
