
function Autocomplete({ matches, onClick }) {
   const lis = matches.map(i => <li onClick={() => onClick({ target: { value: i }})}>{i}</li>);

   return <ul>
      {lis}
   </ul>
}

export default Autocomplete;