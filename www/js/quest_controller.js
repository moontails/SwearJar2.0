angular.module('starter.quest', [])

.factory("QuestService", function() {
  var allQuests = allQuests || [{
    id: 0,
    name: 'June Fever',
    target: 'Pranav',
    amount: '15$',
    questmaster: 'Smruthi',
    supporter: 'Bala, Vijetha'
  }, {
    id: 1,
    name: 'April Fever',
    target: 'Vijetha',
    amount: '30$',
    questmaster: 'Bala',
    supporter: 'Pranav, Smruthi'
  },{
    id: 2,
    name: 'May Fever',
    target: 'Bala',
    amount: '25$',
    questmaster: 'Vijetha',
    supporter: 'Pranav, Smruthi'
  }, {
    id: 3,
    name: 'June Fever',
    target: 'Smruthi',
    amount: '15$',
    questmaster: 'Pranav',
    supporter: 'Bala, Vijetha'
  }];

  return {
    save: function (data) {
      console.log("Saved quest data for " + data.name);
      var d = new Date();
      console.log(d);
      allQuests.push(data);
    },

    all: function(){
      //console.log(allQuests);
      return allQuests;
    },

    get: function(questId) {
      for (var i = 0; i < allQuests.length; i++) {
        if (allQuests[i].id === parseInt(questId)) {
          return allQuests[i];
        }
      }
      return null;
    },

    addcount: function(quest) {
      if(allQuests[parseInt(quest.id)].count){
        allQuests[parseInt(quest.id)].count += 1 ;
      }
      else{
        console.log("Fail: ",allQuests[parseInt(quest.id)].count);
        allQuests[parseInt(quest.id)].count = 1;
      }
        //allQuests[parseInt(quest.id)] = allQuests[quest.addcount] ? allQuests[quest.addcount] + 1 : 1;
        return allQuests;
    }
  };
});
