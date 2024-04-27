const fs = require('fs')

const concejosJSon = fs.readFile('concejos.json', 'utf-8', (err, data) => {
  const concejos = JSON.parse(data)
  /* obtener el primer concejo */
  // console.log(concejos['articles']['article'][0])
  /* obtene rlos datos necesarios de un concejo */
  const name = concejos['articles']['article'][0]['Nombre']['content']
  const capital = concejos['articles']['article'][0]['Capital']['content']
  const virtualVisilURL =
    concejos['articles']['article'][0]['Informacion']['VisitaVirtual'][
      'content'
    ]
  console.log(
    `Concejo: ${name}, capital: ${capital}, URL de visita virtual: ${virtualVisilURL}`
  )
})
