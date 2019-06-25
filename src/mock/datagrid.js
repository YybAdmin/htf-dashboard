import Mock from 'mockjs'

Mock.mock('/report/dataGrid/getData', /post/i, function () {
  return {
    'code': '200',
    'msg': 'success',
    'list':[
      {
        code: "FI-SW-01",
        name: "Koi",
        unitcost: 10.0,
        status: "P",
        listprice: 36.5,
        attr: "Large",
        itemid: "EST-1"
      },
      {
        code: "K9-DL-01",
        name: "Dalmation",
        unitcost: 12.0,
        status: "P",
        listprice: 18.5,
        attr: "Spotted Adult Female",
        itemid: "EST-10"
      },
      {
        code: "RP-SN-01",
        name: "Rattlesnake",
        unitcost: 12.0,
        status: "P",
        listprice: 38.5,
        attr: "Venomless",
        itemid: "EST-11"
      },
      {
        code: "RP-SN-01",
        name: "Rattlesnake",
        unitcost: 12.0,
        status: "P",
        listprice: 26.5,
        attr: "Rattleless",
        itemid: "EST-12"
      },
      {
        code: "RP-LI-02",
        name: "Iguana",
        unitcost: 12.0,
        status: "P",
        listprice: 35.5,
        attr: "Green Adult",
        itemid: "EST-13"
      },
      {
        code: "FL-DSH-01",
        name: "Manx",
        unitcost: 12.0,
        status: "N",
        listprice: 158.5,
        attr: "Tailless",
        itemid: "EST-14"
      },
      {
        code: "FL-DSH-01",
        name: "Manx",
        unitcost: 12.0,
        status: "N",
        listprice: 83.5,
        attr: "With tail",
        itemid: "EST-15"
      },
      {
        code: "FL-DLH-02",
        name: "Persian",
        unitcost: 12.0,
        status: "P",
        listprice: 23.5,
        attr: "Adult Female",
        itemid: "EST-16"
      },
      {
        code: "FL-DLH-02",
        name: "Persian",
        unitcost: 12.0,
        status: "N",
        listprice: 89.5,
        attr: "Adult Male",
        itemid: "EST-17"
      },
      {
        code: "AV-CB-01",
        name: "Amazon Parrot",
        unitcost: 92.0,
        status: "P",
        listprice: 63.5,
        attr: "Adult Male",
        itemid: "EST-18"
      }
    ]
  }
})
