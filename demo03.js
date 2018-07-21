var db = connect('company')
// var workmate3={
//     name:'MinJie',
//     age:20,
//     sex:0,
//     job:'UI设计',
//     skill:{
//         skillOne:'PhotoShop',
//         SkillTwo:'UI',
//         SkillThree:'Word+Excel+PPT'
//     },
//     regeditTime:new Date()
// }
// db.workmate.update({name:'MinJie'},workmate3)
// print('[update]: The data was update successfully')


// ............................
//$set
// db.workmate.update({name:'MinJie'},{"$set":{sex:0,age:20}})

//$inc
// db.workmate.update({"name":"MinJie"},{$inc:{"age":-2}})
//multi
// db.workmate.update({},{$set:{interset:[]}},{multi:true})
//upsert
db.workmate.update({name:'xiaoWang'},{$set:{age:20}},{upsert:true})

print('[update]: The data was update successfully')
