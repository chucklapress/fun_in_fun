var elasticsearch = require('elasticsearch');
let client = new elasticsearch.Client({ host: "USE SUPPLIED URL"});
var finder = async () => {
  var find = await client.search({
    index: "bookeventchatbot",
    _source: "eventname, eventaddress, time, city, state, fitnessactivity, cost, description, zipcode, date",
    filterPath : ['hits.hits._source'],
    body: {
      query: {
        bool: {
          filter: [
            //{ match: { "date": "2019-04-11"}},
            //{ match: { "zipcode": "14092"}},
            //{ match: { "state": "Wisconsin"}},
          ]
        },
      },
    },
  }).then(function (body) {
    var data = body.hits.hits;
    var items = data[0]
    if (items != undefined) {
      var item = items._source
      var state = item.state;
      var city = item.city;
      var zipcode = item.zipcode;
      var cost = item.cost;
      var description = item.description;
      var eventaddress = item.eventaddress;
      var fitnessactivity = item.fitnessactivity;
      var eventname = item.eventname;
      var date = item.date;
    }
    if (items === undefined) {
    console.log('')
  } else {
    console.log(JSON.stringify(eventname+","+ eventaddress+","+city+","+ state+","+zipcode+","+ cost+","+fitnessactivity+","+ description+","+ date))
  }
  var items1 = data[1]
  if (items1 != undefined) {
    var item1 = items1._source
    var state1 = item1.state;
    var city1 = item1.city;
    var zipcode1 = item1.zipcode;
    var cost1 = item1.cost;
    var description1 = item1.description;
    var eventaddress1 = item1.eventaddress;
    var fitnessactivity1 = item1.fitnessactivity;
    var eventname1 = item1.eventname;
  }
  if (items1 === undefined) {
  console.log('')
  } else {
  console.log(JSON.stringify(eventname1+","+ eventaddress1+","+city1+","+ state1+","+zipcode1+","+ cost1+","+fitnessactivity1+","+ description1))
  }
  var items2 = data[2]
  if (items2 != undefined) {
    var item2 = items2._source
    var state2 = item2.state;
    var city2 = item2.city;
    var zipcode2 = item2.zipcode;
    var cost2 = item2.cost;
    var description2 = item2.description;
    var eventaddress2 = item2.eventaddress;
    var fitnessactivity2 = item2.fitnessactivity;
    var eventname2 = item2.eventname;
  }
  if (items2 === undefined) {
  console.log('')
  } else {
  console.log(JSON.stringify(eventname2+","+ eventaddress2+","+city2+","+ state2+","+zipcode2+","+ cost2+","+fitnessactivity2+","+ description2))
  }
  var items3 = data[3]
  if (items3 != undefined) {
    var item3 = items3._source
    var state3 = item3.state;
    var city3 = item3.city;
    var zipcode3 = item3.zipcode;
    var cost3 = item3.cost;
    var description3 = item3.description;
    var eventaddress3 = item3.eventaddress;
    var fitnessactivity3 = item3.fitnessactivity;
    var eventname3 = item3.eventname;
  }
  if (items3 === undefined) {
  console.log('')
  } else {
  console.log(JSON.stringify(eventname3+","+ eventaddress3+","+city3+","+ state3+","+zipcode3+","+ cost3+","+fitnessactivity3+","+ description3))
  }
  var items4 = data[4]
  if (items4 != undefined) {
    var item4 = items4._source
    var state4 = item4.state;
    var city4 = item4.city;
    var zipcode4 = item4.zipcode;
    var cost4 = item4.cost;
    var description4 = item4.description;
    var eventaddress4 = item4.eventaddress;
    var fitnessactivity4 = item4.fitnessactivity;
    var eventname4 = item4.eventname;
  }
  if (items4 === undefined) {
  console.log('')
  } else {
  console.log(JSON.stringify(eventname4+","+ eventaddress4+","+city4+","+ state4+","+zipcode4+","+ cost4+","+fitnessactivity4+","+ description4))
  }
  var items5 = data[5]
  if (items5 != undefined) {
    var item5 = items5._source
    var state5 = item5.state;
    var city5 = item5.city;
    var zipcode5 = item5.zipcode;
    var cost5 = item5.cost;
    var description5 = item5.description;
    var eventaddress5 = item5.eventaddress;
    var fitnessactivity5 = item5.fitnessactivity;
    var eventname5 = item5.eventname;
  }
  if (items5 === undefined) {
  console.log('')
  } else {
  console.log(JSON.stringify(eventname5+","+ eventaddress5+","+city5+","+ state5+","+zipcode5+","+ cost5+","+fitnessactivity5+","+ description5))
  }
  var items6 = data[6]
  if (items6 != undefined) {
    var item6 = items6._source
    var state6 = item6.state;
    var city6 = item6.city;
    var zipcode6 = item6.zipcode;
    var cost6 = item6.cost;
    var description6 = item6.description;
    var eventaddress6 = item6.eventaddress;
    var fitnessactivity6 = item6.fitnessactivity;
    var eventname6 = item6.eventname;
  }
  if (items6 === undefined) {
  console.log('')
  } else {
  //console.log(JSON.stringify(items))
  console.log(JSON.stringify(eventname6+","+ eventaddress6+","+city6+","+ state6+","+zipcode6+","+ cost6+","+fitnessactivity6+","+ description6))
  }
  console.log('_________________________________________________________');
  console.log(description+","+description3+","+ description5)
  })
};
finder()
