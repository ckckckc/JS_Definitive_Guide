function foreach(a,f,t) { 
  try { a.forEach(f,t); }
  catch(e) {
    if (e === foreach.break) return; 
    else throw e;
  }
}
foreach.break = new Error("StopIteration");

module.exports = foreach;