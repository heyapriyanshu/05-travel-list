export default function Stats({items}){

if(items.length == 0){
  return <footer className="stats"> 
  <em>
   Start adding some items to your travel list 🚀
  </em>
</footer>
}

const packed = items.filter(item=> item.packed).length
const perc = Math.round((Number(packed)/Number(items.length))*100)
  return <footer className="stats"> 
    <em>
      {perc === 100 ? "You got everything! Ready to go , Woohoo! ✈️  " : `You have ${items.length} item on your list, and you already packed ${Number(packed)}  (${perc}%)`}
    </em>
  </footer>
}