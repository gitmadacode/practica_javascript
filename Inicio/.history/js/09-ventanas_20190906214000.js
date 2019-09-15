// En este caso usaremos en vez de alert viejo , sweet alerts

function prueba(){
  Swal.fire({
    title: 'Custom width, padding, background.',
    width: 600,
    padding: '3em',
    background: '#fff url("https://pa1.narvii.com/6929/e2ea413ff7002fb82f98f963214a558662574f8ar1-480-270_hq.gif")',
    backdrop: `
      rgba(0,0,123,0.4)
      url("https://thumbs.gfycat.com/GraciousUnsteadyAmurstarfish-size_restricted.gif")
      center left
      no-repeat
    `
  })
};