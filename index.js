// code your solution here
const record = [
    {year: "2015", result: "W"},
    {year: "2014", result: "N/A"},
    {year: "2013", result: "L"},
]

function superbowlWin(record){
    // if record.find returns a value = good else it returns undefined
    let res = record.find(ending => ending.result === "W") 
    if(res)
    {return res.year} 
    else return res
  
}


superbowlWin(record)


