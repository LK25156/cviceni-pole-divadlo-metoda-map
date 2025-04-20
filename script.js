//pole v divadle 
/*const poleDivadlo =[56, 45,89,45,64];
poleDivadlo.push(54);//metoda push přidá do pole počet diváků
console.log(poleDivadlo);*/

/*const poleCisla =[1.2,5.6,4.2,8.9]
poleCisla.pop();//metoda odstraní poslední hodnotu v poli
document.body.innerHTML = poleCisla;*/

/*const plays =["Cekani na Godota", "Romeo a Julie","Hamlet"];
const secondPlays = plays [1];
document.body.innerHTML = secondPlays;
const reviews =[                         //do proměnné reviews uložit pole hodnocení 
  {hra: "Plyšáci na útěku", časopis: "divadlo", hodnocení: 2},
  {hra: "Plyšáci na útěku", časopis: "dg", hodnocení: 3},
]
document.body.innerHTML = reviews[1].časopis;*/

//?
const first=(argument,vek) => {
return document.body.innerHTML = argument[0]
}
first([3, 2, 1]);

//metoda `map` cvičení 1 zvířata a nápoje

const cisla = [7, 1, 4, 5, 2, 9, 3, 6, 8];
const zvirata = [
  'pes',
  'kočka',
  'králík',
  'had',
  'andulka',
  'morče',
  'krkavec',
];
const napoje = [
  { nazev: 'Pivo', cena: 12, skladem: true },
  { nazev: 'Rum', cena: 120, skladem: false },
  { nazev: 'Víno', cena: 85, skladem: true },
  { nazev: 'Whisky', cena: 450, skladem: true },
  { nazev: 'Vodka', cena: 280, skladem: false },
  { nazev: 'Becherovka', cena: 210, skladem: true },
  { nazev: 'Kofola', cena: 40, skladem: true },
  { nazev: 'Voda', cena: 15, skladem: false },
];

const novaCisla = cisla.map((cisla) =>{  //dvojnásobky čísel
  return cisla * 2;
})
console.log(novaCisla);

//delky všech řetězců z pole zvířata
/*const delky = zvirata.map((jmeno) => {
  return jmeno.length
  })
  console.log(delky);*/

//Vytvořte nové pole, které bude obsahovat pouze názvy všech nápojů z pole napoje.
/*const nazvyNapoju = napoje.map((napoj) => {
  return napoj.nazev;
});
console.log(nazvyNapoju);*/

//Vytvořte nové pole, které bude obsahovat pouze název nápoje z pole napoje, pokud je nápoj skladem, v opačném případě bude obsahovat řetězec Není skladem.

const napoje2 = napoje.map((napoj)=>{
  if (napoj.skladem){
    return napoj.nazev
  }
  return "Není skladem"
});

console.log(napoje2);
